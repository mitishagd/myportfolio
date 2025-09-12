import React from 'react'
import styled from 'styled-components'
import WorkInProgress from './pages/WorkInProgress'
import Home from  './pages/Home'

const Styled = {
  AppContainer: styled.div`
    overflow-y: auto;
    font-family: Calibri, sans-serif;
    background-color: #f3fcffff;
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
