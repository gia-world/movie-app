import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IsTv, MyDetail } from "../type";
import * as S from "./Card.style";

const Card = ({ id, title, vote, poster_path, date, isTv }: MyDetail&IsTv) => {
  return (
    <S.Card key={id}>
      <Link href={isTv?`/tv/${id}`:`/movies/${id}`}>
        <Image
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
          alt={title}
          width="220"
          height="330"
          priority
        />
        <h3>{title}</h3>
        <div className="detail">
          <p>Rating: {vote}</p>
          <p>{date&&date.toString()}</p>
        </div>
      </Link>
    </S.Card>
  );
};

export default Card;
