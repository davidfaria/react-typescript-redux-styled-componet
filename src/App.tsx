import React from 'react'
import { ThemeProvider } from 'styled-components'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'

import { useSelector } from 'react-redux'
import { RootState } from 'store'
import Routes from 'routes'

const App = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.value)
  const theme = currentTheme === 'light' ? light : dark

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Routes />
      </div>
    </ThemeProvider>
  )
}

export default App
