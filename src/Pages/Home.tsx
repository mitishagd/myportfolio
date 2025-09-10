import { useState } from 'react'
import styled from 'styled-components'


import About from './About'
import ProfilePicture from './ProfilePicture'

const Styled = {
  Container: styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    font-color: #30c671ff;

    `,
  Intro: styled.div<{_isHovered: boolean}>`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ _isHovered }) => (_isHovered ? '16px' : '22px')};
    animation: ${({ _isHovered }) => (!_isHovered && 'fadeIn 0.5s forwards')};
    margin: 20px 0;
    `
}

const introText = "Hi, I am Mitisha Ganesha Dodderi."

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Styled.Container>
            <ProfilePicture />
            <Styled.Intro _isHovered={isHovered} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} > 
                {isHovered ? <About /> : introText} 
            </Styled.Intro>
            
        </Styled.Container>
    )
}

export default Home