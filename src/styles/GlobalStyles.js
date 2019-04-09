import { createGlobalStyle } from "styled-components";

import Font from "../fonts/Exo2.0-Thin.otf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
     font-family: 'Exo 2.0- Thin';
     src: url(${Font});
  }

  h1, h2 {
    margin: 0;
  }
`;
