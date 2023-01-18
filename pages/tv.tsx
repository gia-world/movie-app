import Rank from "../components/Rank";
import Search from "../components/Search";
import Layout from "../components/layout/Layout";

export default function Tv() {
  return (
      <Layout>
          <Rank isTv={true}/>
          <Search isTv={true}/>
      </Layout>
  );
}
