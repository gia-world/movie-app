import styles from "../styles/Home.module.css";
import Rank from "../components/Rank";
import Search from "../components/Search";
import Layout from "../components/Layout";
import GlobalStyle from "../components/GlobalStyle";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <main>
          <Rank />
          <Search />
        </main>
      </Layout>
    </>
  );
}
