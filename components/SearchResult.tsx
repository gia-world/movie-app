import React from "react";
import { Result } from "./type";
interface Props {
  searchResult: Result[];
}
const SearchResult = ({ searchResult }: Props) => {
  
  return (
    <div className="search-result">
      {searchResult.length===0 ? 
       '검색 결과 없음'  :
       <ul>
        {searchResult&&searchResult.map((it: Result) => <li key={it.id}>{it.title}</li>)}
        </ul>
      }
    </div>
  );
};

export default SearchResult;
