import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Analytics } from '@vercel/analytics/react'
import WorkInProgress from './pages/WorkInProgress.tsx'
import Home from './pages/Home.tsx'
import CursorHalo from './components/CursorHalo.tsx'
import { lightTheme, darkTheme } from './theme/theme'
import { ThemeContext } from './theme/ThemeContext'

const GlobalStyle = createGlobalStyle`
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
`

const Styled = {
  AppContainer: styled.div`
    overflow-y: auto;
    font-family: Calibri, sans-serif;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
    transition: background 0.3s ease, color 0.3s ease;
  `,
}

const isWorkInProgress = false

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Styled.AppContainer>
          <CursorHalo />
          {isWorkInProgress ? <WorkInProgress /> : <Home />}
          <Analytics />
        </Styled.AppContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
