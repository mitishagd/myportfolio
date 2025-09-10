import React from 'react'
import styled from 'styled-components'

const Styled = {
  AppContainer: styled.div`
    text-align: center;
    background-color: #faf9f1ff;
    wifth: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #333;
  `
}

const WorkInProgress = () => {
    return (
        <Styled.AppContainer>
            Work in Progress . . .
        </Styled.AppContainer>
    )
}
export default WorkInProgress