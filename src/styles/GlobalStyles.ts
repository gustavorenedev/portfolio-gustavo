import { createGlobalStyle } from "styled-components";
import { colors } from "./Colors";

export const GlobalStyles = createGlobalStyle`
    html, body, main, article, nav, aside, section,
  header, footer, address, div,
  h1, h2, h3, h4, h5, h6, p, blockquote, ol, ul, li, dl, dt, dd,
  hr, pre, figure, figcaption,
  table, caption, thead, tbody, tfoot, tr, th, td, col, colgroup,
  form, fieldset, legend, label, input, button, select, datalist,
  optgroup, option, textarea, progress, meter,
  img, iframe, embed, object, param, video, audio, source,
  canvas, track, map, area, del, ins,
  a, em, strong, i, b, u, s, small, abbr, q, cite, dfn, sub, sup,
  time, code, kbd, samp, var, bdi, bdo, ruby, rt, rp, wbr,
  mark, span, br {
    padding: 0;
    margin: 0;
    font-size: 100%;
    font-style: normal;
    font-weight: normal;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  img,
  svg {
    max-width: 100%;
    border: 0;
  }
  svg a {
    display: block;
  }

  li {
    list-style: none;
  }

  hr {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  caption,
  th,
  td {
    text-align: left;
  }

  ::after,
  ::before {
    box-sizing: inherit;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }

  body {
    min-height: 100vh;
    line-height: 1.38;
  }

  p {
    font-size: 1.1rem;
  }

  a {
    color: ${colors.white};
    transition: all 500ms ease;
    font-size: 1.1rem;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.1;
    color: ${colors.black};
  }

  h1 {
      font-size: 3rem;
  }

  h2 {
      font-size: 2rem;
  }

  h3 {
      font-size: 1.6rem;
  }

  h4 {
      font-size: 1.1rem;
  }

  h5 {
      font-size: 0.95rem;
  }

  h6 {
      font-size: 0.8rem;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #808080; 
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}
`;
