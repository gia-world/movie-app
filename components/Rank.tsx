import Link from "next/link";
import React, { useEffect, useState } from "react";
import { moviesApi, tvApi } from "../pages/api/tmdb";
import { IsTv, Result } from "./type";
import * as S from "./Rank.style";

const Rank = ({isTv}:IsTv) => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    isTv?
    ( tvApi.popular().then((it) => {
      setPopular(it.data.results);
    })):
   ( moviesApi.popular().then((it) => {
      setPopular(it.data.results);
    }))
  }, [isTv]);

  // const slicedPopularMovies = popularMovies.slice(0, 10);
  // console.log(popular)

  return (
    // 스크롤링
    <S.Rank>
      <h3>✨ 실시간 인기작</h3>
      <div>
      <ul className="rolling-list">
        {popular.slice(0,10).map((it: Result,idx:number) => (
          <li key={it.id}>
            {/* <Link href={`/movies/${it.id}`}><span>{idx+1}</span>{it.title}</Link> */}
            <Link href={
              isTv? `/tv/${it.id}`:
              `/movies/${it.id}`
          }>
              <span>{idx+1}</span>{isTv? it.name:it.title}
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </S.Rank>
  );
};

export default Rank;
