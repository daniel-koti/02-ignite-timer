import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['primary-500']};
  }

  body {
    background: ${(props) => props.theme['panel-900']};
    color: ${(props) => props.theme['brand-300']};
    -webkit-font-smoothing: antialiased;
    padding: 0 1.5rem;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
