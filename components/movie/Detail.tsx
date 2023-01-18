import Image from "next/image";
import React from "react";
import { IsTv, MyDetail } from "../type";
import * as S from "./Detail.style";

const Detail = ({
  id,
  title,
  date,
  country,
  runtime,
  vote,
  genres,
  poster_path,
  overview,
  isTv
}: MyDetail&IsTv) => {
  return (
    <S.Detail key={id}>
      <Image
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
        alt={title}
        width="220"
        height="330"
        priority
      />
      <div>
        <h2>{title}</h2>
        <p>Rating: {vote}</p>
        <p>Released on {`${date}, ${country}`}</p>
        {isTv?null:(<p>Runtime: {runtime}min</p>)}
        <ul>
          {genres &&
            genres.map((it: { id: number; name: string }) => (
              <li key={it.id}>{it.name}</li>
            ))}
        </ul>
        <p>{overview}</p>
      </div>
    </S.Detail>
  );
};

export default Detail;
