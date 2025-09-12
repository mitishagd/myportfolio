import React from 'react'
import styled from 'styled-components'
// import WorkInProgress from './pages/WorkInProgress'
import Home from  './pages/Home'

const Styled = {
  AppContainer: styled.div`
    overflow-y: auto;
    font-family: Calibri, sans-serif;
  `
}

// const isWorkInProgress = false;

const App = () => {
  
  return (
    <Styled.AppContainer>
      {/* {isWorkInProgress ? <WorkInProgress /> : <Home />} */}
      <Home />
    </Styled.AppContainer>
  )
}

export default App
