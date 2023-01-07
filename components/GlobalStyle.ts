import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  /* text-decoration: none; */
}

* {
  box-sizing: border-box;
}

.font{
  font-family: var(--monts), nanumsquare;
  font-weight: 400;
}
`;

export default GlobalStyle;