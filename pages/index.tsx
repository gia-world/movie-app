import styles from "../styles/Home.module.css";
import Rank from "../components/Rank";
import Search from "../components/Search";
import { api, moviesApi } from "./api/tmdb";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <main>
        <Rank />
        <Search />
      </main>
    </>
  );
}
