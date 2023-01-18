import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import React from "react";
import Layout from "../../components/layout/Layout";
import Detail from "../../components/movie/Detail";
import { Result } from "../../components/type";
import { moviesApi, tvApi } from "../api/tmdb";

const getShow = async (id: string) => {
  return await tvApi.showDetail(id).then(function (res) {
    // console.log(res.data,'getmovie')
    return res.data;
  });
};

interface Props {
  show: Result;
}

const Show = ({ show }: Props) => {
  console.log("show", show);
  return (
    <Layout>
        <Detail
          id={show.id}
          title={show.name}
          date={show.first_air_date}
          country={show.production_countries[0].name}
          vote={show.vote_average}
          genres={show.genres}
          poster_path={show.poster_path}
          overview={show.overview}
          isTv={true}
        />
        <Link href="/">&lt; Back</Link>
    </Layout>
  );
};

export default Show;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params!.id as string;
  console.log("--------------------", id);
  const show = await getShow(id);
  return {
    props: { show }, // will be passed to the page component as props
  };
}
