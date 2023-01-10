import styled from "styled-components";
export const Search = styled.section`
  .search-input{
    .form{
      &__wrap{
        display: flex;
      align-content: center;
      justify-content: center;
      gap: 10px;
      }
      &__input{
        padding: 2px 4px;
        border: 0;
        border-bottom: 1px solid;
      }
      &__submit{
        height: 100%;
        padding: 2px 8px;
        border-color: transparent;
        border-radius: 8px;
      }
    }
  }
`;
