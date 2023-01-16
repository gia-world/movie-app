import Link from "next/link";
import React, { useEffect, useState } from "react";
import { moviesApi } from "../pages/api/tmdb";
import { Result } from "./type";
import * as S from "./Rank.style";

const Rank = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    moviesApi.popular().then((it) => {
      setPopularMovies(it.data.results);
    });
  }, []);

  const slicedPopularMovies = popularMovies.slice(0, 10);

  return (
    // 스크롤링
    <S.Rank>
      <ul className="rolling-list">
        {slicedPopularMovies.map((it: Result) => (
          <li key={it.id}>
            <Link href={`/movies/${it.id}`}>{it.title}</Link>
          </li>
        ))}
      </ul>
    </S.Rank>
  );
};

export default Rank;
