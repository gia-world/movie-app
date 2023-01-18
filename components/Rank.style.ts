import styled from "styled-components";
export const Rank = styled.aside`
  width: 70%;
  max-width: 600px;
  min-width: 300px;
  margin: 0 auto;
  h3+div{
    margin-top: 10px;
  }
  + section{
    margin-top: 60px;
  }
>div{
  height: 34px;
  overflow: hidden;
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
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    span{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      border-radius: 8px;
      background-color: yellowgreen;
    }
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
    60% {
      transform: translateY(calc(var(--h) * -6));
    }
    68% {
      transform: translateY(calc(var(--h) * -6));
    }
    70% {
      transform: translateY(calc(var(--h) * -7));
    }
    78% {
      transform: translateY(calc(var(--h) * -7));
    }
    80% {
      transform: translateY(calc(var(--h) * -8));
    }
    88% {
      transform: translateY(calc(var(--h) * -8));
    }
    90% {
      transform: translateY(calc(var(--h) * -9));
    }
    98% {
      transform: translateY(calc(var(--h) * -9));
    }
    100% {
      transform: translateY(calc(var(--h) * -9));
    }
  }
}
`;
