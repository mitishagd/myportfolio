import { useState } from 'react'
import styled from 'styled-components'

import About from '../components/About.tsx'
import ProfilePicture from '../components/ProfilePicture.tsx'
import SocialsSidebar from  '../components/SocialsSidebar.tsx'
import Experience from '../components/Experience.tsx'
import Skills from '../components/Skills.tsx'
import Footer from '../components/Footer.tsx'
import NavBar from '../components/NavBar.tsx'
import { DARK_THEME } from '../themes/DarkTheme.tsx'
import { LIGHT_THEME } from '../themes/LightTheme.tsx'

const Styled = {
  SocialsSidebar: styled(SocialsSidebar)`

    `,  
  AboutContainer: styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    margin: 0 10%;
    `,
  Intro: styled.div<{_isHovered: boolean}>`
    color: #13300d
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ _isHovered }) => (_isHovered ? '20px' : '22px')};
    animation: ${({ _isHovered }) => (!_isHovered && 'fadeIn 0.5s forwards')};
    `,
    ProfilePicture: styled(ProfilePicture)`
      float: right;
    `,
    Root: styled.div<{_isDarkMode: boolean}>`
      background-color: ${({ _isDarkMode }) => (_isDarkMode ? DARK_THEME.background : LIGHT_THEME.background)};
      color: ${({ _isDarkMode }) => (_isDarkMode ? DARK_THEME.color : LIGHT_THEME.color)};
    `
}

const introText = "Hi, I am Mitisha Ganesha Dodderi."
const bioText = "Software Engineer | Passionate about tech improving lives | Dog Mom | Avid reader"

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <Styled.Root _isDarkMode={isDarkMode}>
            <NavBar />
            <Styled.SocialsSidebar isDarkMode={isDarkMode} />
            <Styled.AboutContainer>
                <Styled.ProfilePicture />
                <Styled.Intro _isHovered={isHovered} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} > 
                    {isHovered ? bioText : introText} 
                </Styled.Intro>
            </Styled.AboutContainer>
            <About isDarkMode={isDarkMode} />
            <Skills isDarkMode={isDarkMode} />
            <Experience isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode}/>
        </Styled.Root>
    )
}

export default Home