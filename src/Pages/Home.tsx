import { useState } from 'react'
import styled from 'styled-components'


import About from '../components/About'
import ProfilePicture from '../components/ProfilePicture'
import SocialsSidebar from  '../components/SocialsSidebar'

const Styled = {
  Container: styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;

    `,
  Intro: styled.div<{_isHovered: boolean}>`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ _isHovered }) => (_isHovered ? '16px' : '22px')};
    animation: ${({ _isHovered }) => (!_isHovered && 'fadeIn 0.5s forwards')};
    `,
    ProfilePicture: styled(ProfilePicture)`
      position: right;
    `
}

const introText = "Hi, I am Mitisha Ganesha Dodderi."

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Styled.Container>
            <SocialsSidebar />
            <Styled.ProfilePicture />
            <Styled.Intro _isHovered={isHovered} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} > 
                {isHovered ? <About /> : introText} 
            </Styled.Intro>
            
        </Styled.Container>
    )
}

export default Home