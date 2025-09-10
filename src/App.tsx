import React from 'react'
import styled from 'styled-components'
import WorkInProgress from './Pages/WorkInProgress'
import Home from './Pages/Home'

const Styled = {
  AppContainer: styled.div`
    font-weight: bold;
    overflow-y: auto;
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
