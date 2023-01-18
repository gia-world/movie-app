import Link from 'next/link';
import React from 'react'
import * as S from "./Header.style";

const Header = () => {
  return (
    <S.Header>
      <Link href="/">Home</Link>
      <Link href="/movie">Movie</Link>
      <Link href="/tv">TV show</Link>
    </S.Header>
  )
}

export default Header