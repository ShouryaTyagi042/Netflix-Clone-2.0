import React, { useEffect, useState } from "react";
import "../assets/css/PlanScreen.css";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";

export default function PlanScreen() {
  const [products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscriptions) => {
          setSubscription({
            role: subscriptions.data().role,
            current_period_end: subscriptions.data().current_period_end.seconds,
            current_period_start:
              subscriptions.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);
  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);
  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`An error occurred: ${error.message} `);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51NYA1iSI3QmM2ZNWAIusvCHgl3h2q2wsw9yLVxjg3qsb3oMLZLtZZ5rxirqrb94rqLNLKIDjpXEjyZxFqUJzJFLa00yrrgJ42X"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };
  return (
    <div className="planScreen">
      <br></br>
      {subscription && (
        <p>
          Renewal date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrenPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);
        return (
          <div
            key={productId}
            className={`${
              isCurrenPackage && "planScreen_plans--disabled"
            } planScreen_plans`}
          >
            <div className="planScreen_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrenPackage && loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrenPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
