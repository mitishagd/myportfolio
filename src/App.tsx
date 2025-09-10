import React from 'react'
import styled from 'styled-components'
import WorkInProgress from './Pages/WorkInProgress'

const Styled = {
  AppContainer: styled.div`
    font-weight: bold;
  `
}

const App = () => {
  return (
    <Styled.AppContainer>
      <WorkInProgress />
    </Styled.AppContainer>
  );
}

export default App
