import styled from "styled-components";
export const Detail = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  /* margin: 60px auto; */
  +a{
    display: block;
    text-align: right;
  }
  h2{
    margin-bottom: 10px;
  }
  div{
    p{
        margin-top: 10px;
    }
    ul{
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }
  }
`;
