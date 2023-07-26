import React, { useEffect, useState } from "react";
import "../assets/css/PlanScreen.css";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";

export default function PlanScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
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
  console.log(products);
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
          "sk_test_51NYA1iSI3QmM2ZNWa57SYytk3AOMgnG1JSXzu2DXBoMC8z0yDiHU7y84nyuRV96l6f0hZ2Wju7O6zizdyzaSz0DL00LHK9RWyk"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };
  return (
    <div className="planScreen">
      {Object.entries(products).map(([productId, productData]) => {
        //TODO: logic to check if user subscription is active.
        return (
          <div className="planScreen_plans">
            <div className="planScreen_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}
