import styled from "styled-components";
export const Card = styled.div`
  a {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 220px;
    text-decoration: none;

    h3{
      font-size: 20px;
      font-weight: bold;
    }

    .detail{
      display: flex;
      justify-content: space-between;
    }
  }
`;
