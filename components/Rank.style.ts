import styled from "styled-components";
export const Rank = styled.aside`
  width: 300px;
  height: 34px;
  overflow: hidden;
  margin: 0 auto 30px;
  border: 1px solid #bbb;
  ul {
    animation: slideup 20s infinite;
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
    8% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(calc(var(--h) * -1));
    }
    18% {
      transform: translateY(calc(var(--h) * -1));
    }
    20% {
      transform: translateY(calc(var(--h) * -2));
    }
    28% {
      transform: translateY(calc(var(--h) * -2));
    }
    30% {
      transform: translateY(calc(var(--h) * -3));
    }
    38% {
      transform: translateY(calc(var(--h) * -3));
    }
    40% {
      transform: translateY(calc(var(--h) * -4));
    }
    48% {
      transform: translateY(calc(var(--h) * -4));
    }
    50% {
      transform: translateY(calc(var(--h) * -5));
    }
    58% {
      transform: translateY(calc(var(--h) * -5));
    }
    100% {
      transform: translateY(calc(var(--h) * -9));
    }
  }
`;
