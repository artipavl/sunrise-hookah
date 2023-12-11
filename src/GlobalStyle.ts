import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import palette from './theme.module';

export const GlobalStyle = createGlobalStyle`
/* html {
  scroll-behavior: smooth;
} */


/* ::-webkit-scrollbar {
  border-radius: 5px;
  height: 10px;
  width: .65em;
  background-color: rgba(170, 170, 170, 0);
}
::-webkit-scrollbar-track,
::-webkit-scrollbar-corner {
  background-color: rgba(170, 170, 170, 0);
}

::-webkit-scrollbar-thumb,
::-webkit-resizer {
  background: rgba(170, 170, 170, 0.6);
  border-radius: 5px;
  box-shadow: inset 0.05em 0.05em 0 rgba(0, 0, 0, 0.1), inset 0 -0.05em 0 rgba(0, 0, 0, 0.07);
} */

    body {
        font-family: 'Montserrat';
        margin: 0;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.25;
        color: #000000;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        background: ${palette.bgMain};        
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
  margin: 0;
}
    ul,
    ol {
  margin: 0;
  padding: 0;
}
    li {
  list-style: none;
}
    img {
  display: block;
  width: 100%;
  height: auto;
}

    a {
  display: block;
  text-decoration: none;
  cursor: pointer;
}

    button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}

    address {
  font-style: normal;
}
svg {
    fill: currentColor;
    }
`;
