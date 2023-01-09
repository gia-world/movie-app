import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MyDetail } from '../type'
import * as S from "./Card.style";


const Card = ({id,title,runtime,vote,poster_path}:Partial<MyDetail>) => {
  return (
    <S.Card key={id}>
      <Link href={`/movies/${id}`}>
        <Image src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`} alt={title as string}
        width="220"
        height="330"
        priority
        />
          <h3>{title}</h3>
          <div className="detail">
          <p>Rating: {vote}</p>
          <p>Runtime: {runtime}min</p>
          </div>
      </Link>
    </S.Card>
  )
}

export default Card