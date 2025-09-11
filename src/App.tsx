import React from 'react'
import styled from 'styled-components'
import WorkInProgress from './pages/WorkInProgress'
import Home from  './pages/Home'

const Styled = {
  AppContainer: styled.div`
    font-weight: bold;
    overflow-y: auto;
    background-color: #ffffffff;
    font-family: Calibri, sans-serif;
  `
}

const isWorkInProgress = false;

const App = () => {
  
  return (
    <Styled.AppContainer>
      {isWorkInProgress ? <WorkInProgress /> : <Home />}
    </Styled.AppContainer>
  )
}

export default App
