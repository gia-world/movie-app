import axios from "axios";

/* axios 인스턴스 생성 */
const auth_key = process.env.NEXT_PUBLIC_TMDB_KEY;

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/550",
  params: {
    key: auth_key,
    language: "en-US",
  },
});

