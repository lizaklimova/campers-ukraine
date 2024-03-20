import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --easedTransition: 350ms ease-in-out;
    --cubicTransition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

*,
*::before,
*::after  {
  box-sizing: border-box;
}

body {
    font-family: 'Poppins', 'Golos Text', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    margin: 0;
}

 ::-webkit-scrollbar {
  width: 7px;
} 

::-webkit-scrollbar-thumb {
  background-color: var(--scroll-bar-color);
  border-radius: 7px;
}

::-webkit-scrollbar-track {
   background-color: var(--scroll-bar-bg);
   color: rgba(255, 255, 255, 0.4);
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
  list-style-type: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  font-family: inherit;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}

input {
  font-family: inherit;

  &:focus {
    outline: none;
  }
}
`;

export default GlobalStyles;
