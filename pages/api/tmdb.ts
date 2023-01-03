import axios from "axios";

/* axios 인스턴스 생성 */
const auth_key = process.env.NEXT_PUBLIC_TMDB_KEY;

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: auth_key,
    language: "ko-KR",
  },
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Content-Type": "text/plain",
  // },
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id:string) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term:string) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id:string) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term:string) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(encodeURIComponent(term)),
      },
    }),
};