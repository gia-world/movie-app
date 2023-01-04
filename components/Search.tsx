import React, { useState } from "react";
import { moviesApi } from "../pages/api/tmdb";
import SearchResult from "./SearchResult";
import { Result } from "./type";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isSearched, setIsSearched] = useState(true);
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(searchInput,encodeURIComponent(searchInput))
    moviesApi.search(searchInput).then((it) => {
      console.log("search", it.data.results);
      setSearchResult(it.data.results);
    });
    setSearchInput("");
    setIsSearched(false);
  };
  return (
    <section>
      {/* searchInput */}
      <div className="search-input">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="form__label">
            <input type="text" id="movie-title" className="form__input" name="movie_title" placeholder="영화 제목을 입력해주세요." value={searchInput} onChange={handleChange} 
            required />
            <div className="btn-box">
              <input className="btn form__submit" type="submit" value="검색" />
            </div>
          </label>
        </form>
      </div>

      {/* searchResult */}
      {
        isSearched?'검색어를 입력해 주세요':(
          <SearchResult searchResult={searchResult}/>
        )
      }
    </section>
  );
};

export default Search;
