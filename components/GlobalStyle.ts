import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{margin:0;padding:0;font:inherit;color:inherit;}
*, :after, :before {box-sizing:border-box;}
:root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:4}
html, body {height:100%;}
img, picture, video, canvas, svg {display: block;max-width:100%;}
button {background:none;border:0;cursor:pointer;}
a {text-decoration:none}
table {border-collapse:collapse;border-spacing:0}
button, input, select, textarea {font:inherit}
ul,ol {list-style:none}
h1{font-size:28px}
h2{font-size:24px}
h3{font-weight:700;font-size:18px}

:root{
  --h:34px
}

.font{
  font-family: var(--monts), nanumsquare;
  font-weight: 400;
}
`;

export default GlobalStyle;
