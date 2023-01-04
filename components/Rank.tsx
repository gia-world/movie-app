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

  const slicedPopularMovies = popularMovies.slice(0, 9);

  return (
    // 스크롤링 예정
    <aside>
      <ul>
        {slicedPopularMovies.map((it: Result) => (
          <li key={it.id}>{it.title}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Rank;
