import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/themes/dark'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
