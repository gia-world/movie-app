import React, { useEffect, useState } from "react";
import { moviesApi } from "../pages/api/tmdb";
import { Result } from "./type";
const Rank = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    moviesApi.popular().then((it) => {
      setPopularMovies(it.data.results);
    });
  }, []);

  return (
    <section>
      <ul>
        {popularMovies.map((it:Result) => (
          <li key={it.id}>{it.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default Rank;
