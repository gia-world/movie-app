export interface NowPlaying {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date:Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  production_countries:[{
    name:string
  }];
  runtime:number;
  genres:[]
}
export interface MyDetail {
  id: number;
  title: string;
  overview?: string;
  poster_path: string;
  date: Date;
  vote: number;
  runtime?:number;
  country?:string;
  genres?:[]
}