import styled from 'styled-components'
import About from './About'

const Styled = {
  Container: styled.div`
    text-align: center;
    display: block;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    `,
  Intro: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    margin: 20px 0;
    `
}

const Home = () => {
    return (
        <Styled.Container>

            <Styled.Intro> Hi, I am Mitisha Ganesha Dodderi. </Styled.Intro>

            <About />
        </Styled.Container>
    )
}

export default Home