import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const openInNewTab = (url, movie) => {
    window.open(
      `https://www.google.com/search?q=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                onClick={() =>
                  openInNewTab(
                    movie.name ? movie.name : movie.original_title,
                    movie
                  )
                }
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseURL}${
                  isLargeRow
                    ? movie.poster_path
                    : movie.backdrop_path
                    ? movie.backdrop_path
                    : movie.poster_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
