import Image from 'next/image'
import React from 'react'
import { MyDetail } from '../type'
import * as S from "./Detail.style";


const Detail = ({id,title,date,country,runtime,vote,genres,poster_path,overview}:MyDetail) => {
  return (
    <S.Detail key={id}>
        <Image src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`} alt={title}
        width="220"
        height="330"
        priority
        />
        <div>
          <h3>{title}</h3>
          <p>Rating: {vote}</p>
          <p>Released on {`${date}, ${country}`}</p>
          <p>Runtime: {runtime}min</p>
          <ul>
            {genres&&genres.map(
              (it:{id:number,name:string})=>
              <li key={it.id}>{it.name}</li>
            )}
          </ul>
          <p>{overview}</p>
        </div>
    </S.Detail>
  )
}

export default Detail