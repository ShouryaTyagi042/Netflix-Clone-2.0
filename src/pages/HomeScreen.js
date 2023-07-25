import React from "react";
import "../assets/css/HomeScreen.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar></Navbar>
      <Banner></Banner>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        islargeRow
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
    </div>
  );
}

export default HomeScreen;
