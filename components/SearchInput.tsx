import React from 'react'

const SearchInput = () => {
  return (
    <div className='search-input'><form>
    <label htmlFor="name" className="form__label">
      <input
        type="text"
        id="movie-title"
        className="form__input"
        name="movie_title"
        placeholder="영화 제목을 입력해주세요."
        required
        />
      <div className="btn-box">
        <input
          className="btn form__submit"
          type="submit"
          value="검색"
          />
      </div>
    </label>
  </form></div>
  )
}

export default SearchInput