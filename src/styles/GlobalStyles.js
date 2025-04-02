import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Arial, sans-serif;
  }

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.primary};
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
