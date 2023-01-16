import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import React from "react";
import Layout from "../../components/layout/Layout";
import Detail from "../../components/movie/Detail";
import { Result } from "../../components/type";
import { moviesApi } from "../api/tmdb";

const getMovie = async (id: string) => {
  return await moviesApi.movieDetail(id).then(function (res) {
    // console.log(res.data,'getmovie')
    return res.data;
  });
};

interface Props {
  movie: Result;
}

const Movie = ({ movie }: Props) => {
  console.log("movie", movie);
  return (
    <Layout>
      <main>
        <Detail
          id={movie.id}
          title={movie.title}
          date={movie.release_date}
          country={movie.production_countries[0].name}
          runtime={movie.runtime}
          vote={movie.vote_average}
          genres={movie.genres}
          poster_path={movie.poster_path}
          overview={movie.overview}
        />
        <Link href="/">&lt; Back</Link>
      </main>
    </Layout>
  );
};

export default Movie;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params!.id as string;
  console.log("--------------------", id);
  const movie = await getMovie(id);
  return {
    props: { movie }, // will be passed to the page component as props
  };
}
