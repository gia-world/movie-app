import styled from "styled-components";
export const Rank = styled.aside`
  width: 300px;
  height: 34px;
  overflow: hidden;
  border: 1px solid #bbb;
  ul {
    animation: slideup 10s infinite;
    li {
      height: 34px;
      padding: 0 1rem;
      font-weight: 700;
      line-height: 34px;
    }
  }
  a {
    text-decoration: none;
  }
  @keyframes slideup {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(var(--h) * -9);
    }
  }
`;
