import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MyDetail } from '../type'


const Card = ({id,title,runtime,vote,poster_path}:Partial<MyDetail>) => {
  return (
    <div key={id}>
      <Link href={`/movies/${id}`}>
        <Image src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`} alt={title as string}
        width="220"
        height="330"
        priority
        />
        <div>
          <h3>{title}</h3>
          <p>Rating: {vote}</p>
          <p>Runtime: {runtime}min</p>
        </div>
      </Link>
    </div>
  )
}

export default Card