import styled from 'styled-components'
import WorkInProgress from './pages/WorkInProgress.tsx'
import Home from  './pages/Home.tsx'

const Styled = {
  AppContainer: styled.div`
    overflow-y: auto;
    font-family: Calibri, sans-serif;
    // background-color: #020e03;
    // color: white
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
