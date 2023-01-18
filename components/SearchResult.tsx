import React from "react";
import Card from "./movie/Card";
import { IsTv, Result } from "./type";
import * as S from "./SearchResult.style";

interface Props {
  searchResult: Result[];
}

const SearchResult = ({ searchResult,isTv }: Props&IsTv) => {
  
  return (
    <S.SearchResult>
      {searchResult.length===0 ? 
       (<p className="search-text">검색 결과 없음</p>)  :
       <div className="result-wrap">
        {searchResult&&searchResult.map((it:Result) => <Card
        key={it.id}
        id={it.id}
        title={isTv? it.name:it.title}
        // runtime={it.runtime}
        vote={it.vote_average}
        // genres={it.genres}
        poster_path={it.poster_path}
        date={isTv? it.first_air_date:it.release_date}
        isTv={isTv}
        />
        )}
        </div>
      }
    </S.SearchResult>
  );
};

export default SearchResult;
