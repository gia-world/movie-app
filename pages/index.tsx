import styles from "../styles/Home.module.css";
import Rank from "../components/Rank";
import Search from "../components/Search";
import Layout from "../components/Layout";
import GlobalStyle from "../components/GlobalStyle";

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
