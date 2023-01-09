import React from "react";
import Card from "./movie/Card";
import { Result } from "./type";
import * as S from "./SearchResult.style";

interface Props {
  searchResult: Result[];
}
const SearchResult = ({ searchResult }: Props) => {
  
  return (
    <S.SearchResult>
      {searchResult.length===0 ? 
       '검색 결과 없음'  :
       <div className="search-result">
        {searchResult&&searchResult.map((it:Partial<Result>) => <Card
        key={it.id}
        id={it.id}
        title={it.title}
        runtime={it.runtime}
        vote={it.vote_average}
        genres={it.genres}
        poster_path={it.poster_path}
        />
        )}
        </div>
      }
    </S.SearchResult>
  );
};

export default SearchResult;
