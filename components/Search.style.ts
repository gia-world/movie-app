import styled, { css } from "styled-components";

export const Search = styled.section`
  .search {
    &-input {
      margin-bottom: 40px;
      .form {
        &__wrap {
          display: flex;
          align-content: center;
          justify-content: center;
          gap: 20px;
        }
        &__input {
          /* width: 220px; */
          padding: 2px 4px;
          border: 0;
          border-bottom: 1px solid;
        }
        &__submit {
          height: 100%;
          padding: 2px 8px;
          border-color: transparent;
          border-radius: 8px;
        }
      }
    }
    &-text{
      text-align: center;
    }
  }
`;

interface Props {
  name: string;
}
export const SearchInput = styled.input<Props>`
  width: ${(props) => (props.name === "show-title" ? "250px" : "200px")};
`;
