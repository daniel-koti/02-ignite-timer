import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CyclesContextProvider } from './context/CycleContext'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/themes/dark'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>

        <GlobalStyle />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
