import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import "../assets/css/Row.css";

const base_URL = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, islargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, settrailerURL] = useState("");
  //a snippet of code that runs on a specific condition
  useEffect(() => {
    // if we leave [] then we mean run it once and then dont run it again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerURL) {
      settrailerURL("");
    } else {
      movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          console.log("url is " + url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParamsn" + urlParams);
          settrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  // console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* several row_posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${islargeRow && "row_posterLarge"}`}
            src={
              base_URL +
              `${islargeRow ? movie.poster_path : movie.backdrop_path}`
            }
            alt={movie.name}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
}

export default Row;
