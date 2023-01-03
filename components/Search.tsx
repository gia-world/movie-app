import React, { useState } from "react";
import { moviesApi } from "../pages/api/tmdb";
import { Result } from "./type";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isWating, setIsWating] = useState(true);
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    moviesApi.search(searchInput).then((it) => {
      console.log("search", it.data.results);
      setSearchResult(it.data.results);
    });
    setSearchInput("");
    setIsWating(false);
  };
  return (
    <section>
      {/* searchInput */}
      <div className="search-input">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="form__label">
            <input type="text" id="movie-title" className="form__input" name="movie_title" placeholder="영화 제목을 입력해주세요." value={searchInput} onChange={handleChange} required />
            <div className="btn-box">
              <input className="btn form__submit" type="submit" value="검색" />
            </div>
          </label>
        </form>
      </div>

      {/* searchResult */}
      {isWating ? null : (
        <ul>
          {searchResult.map((it: Result) => (
            <li key={it.id}>{it.title}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Search;
