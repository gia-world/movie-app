import React, { useState } from "react";
import { moviesApi, tvApi } from "../pages/api/tmdb";
import SearchResult from "./SearchResult";
import * as S from "./Search.style";
import { IsTv } from "./type";

const Search = ({isTv}:IsTv) => {
  const [searchInput, setSearchInput] = useState("");
  const [isSearched, setIsSearched] = useState(true);
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    isTv?(tvApi.search(searchInput).then((it) => {
      console.log("searched-tv", it.data.results);
      setSearchResult(it.data.results);
    })):
    (moviesApi.search(searchInput).then((it) => {
      console.log("searched-movie", it.data.results);
      setSearchResult(it.data.results);
    }))
    setSearchInput("");
    setIsSearched(false);
  };
  return (
    <S.Search>
      {/* searchInput */}
      <div className="search-input">
        <form onSubmit={handleSubmit} className="form__wrap">
          <label htmlFor="name" className="form__label">
            <S.SearchInput type="text" id="movie-title" className="form__input" name={isTv? 'show-title':'movie-title'} placeholder={isTv? "TV 프로그램 제목을 입력해주세요.":"영화 제목을 입력해주세요."} value={searchInput} onChange={handleChange} 
            required />
          </label>
          <div className="btn-box">
            <input className="btn form__submit" type="submit" value="검색" />
          </div>
        </form>
      </div>

      {/* searchResult */}
      {
        isSearched?
        (<p className="search-text">검색어를 입력해 주세요</p>)
        :(
          <SearchResult searchResult={searchResult} isTv={isTv}/>
        )
      }
    </S.Search>
  );
};

export default Search;
