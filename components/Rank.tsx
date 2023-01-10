import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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

  // const rollingList = useRef()
  // const newsTicker = (timer:number) => {
    
  //   const rl=rollingList.current;
  //   // window.setInterval(() => {
  //   //   $ul.style.transitionDuration = "400ms";
  //   //   $ul.style.marginTop = "-34px";
  
  //   //   window.setTimeout(() => {
  //   //     $ul.style.transitionDuration = "";
  //   //     $ul.style.marginTop = "";
  //   //     // send the first element to the back 400ms later.
  //   //     $ul.appendChild($ul.querySelector("li:first-child"));
  //   //   }, 400)
  
  //   // }, timer)
  // }
  
  // newsTicker(1500)
  // newsTicker()

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
