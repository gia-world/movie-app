import Rank from "../components/Rank";
import Search from "../components/Search";
import Layout from "../components/layout/Layout";

export default function Movie() {
  return (
      <Layout>
          <Rank />
          <Search />
      </Layout>
  );
}
