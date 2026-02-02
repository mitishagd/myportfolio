import { lazy, Suspense, useEffect, useRef,useState } from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

import About from '../components/About.tsx'
import Experience from '../components/Experience.tsx'
import Footer from '../components/Footer.tsx'
import NavBar from '../components/NavBar.tsx'
import ProfilePicture from '../components/ProfilePicture.tsx'
import Projects from '../components/Projects.tsx'
import SocialLinksSidebar from '../components/SocialLinks.tsx'
import VisuallyHidden from '../components/ui/VisuallyHidden'
import { useTheme } from '../hooks/useTheme'
import { darkTheme,lightTheme } from '../theme/theme'

const Skills = lazy(() => import('../components/Skills.tsx'))

const Styled = {
  SocialLinksSidebar: styled(SocialLinksSidebar)``,
  AboutContainer: styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10%;
    height: 100vh;
    margin-top: -90px;
    padding-top: 90px;
    box-sizing: border-box;

    @media (max-width: 768px) {
      flex-direction: column;
      margin-top: -70px;
      padding-top: 70px;
    }
  `,
  Intro: styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    text-align: center;
    padding: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
      padding: 10px;
      min-height: 200px;
    }
  `,
  ProfilePicture: styled(ProfilePicture)`
    float: right;
  `,
  Root: styled.div``,
  Main: styled.main``,
  Name: styled.span`
    color: #10b981;
    margin-left: 0.25em;

    @media (max-width: 768px) {
      display: block;
      margin-left: 0;
      margin-top: 5px;
    }
  `,
}
const bioText = 'Software Engineer | Passionate about tech improving lives | Dog Mom | Avid reader'

const Home = () => {
  const { isDarkMode } = useTheme()
  const theme = isDarkMode ? darkTheme : lightTheme
  const [showSkills, setShowSkills] = useState(false)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSkills(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )
    if (skillsRef.current) observer.observe(skillsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Styled.Root>
      <VisuallyHidden as="h1">Mitisha Ganesha Dodderi - Software Engineer</VisuallyHidden>
      <NavBar />
      <Styled.SocialLinksSidebar />
      <Styled.Main>
        <Styled.AboutContainer>
          <Styled.ProfilePicture />
          <Styled.Intro aria-label={`Hi, I am Mitisha Ganesha Dodderi. ${bioText}`}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Hi, I am ')
                  .typeString(
                    `<span style="color: ${theme.secondary};">Mitisha Ganesha Dodderi</span>`
                  )
                  .typeString('.<br/><br/>')
                  .typeString('<span style="font-size: 18px;">' + bioText + '</span>')
                  .start()
              }}
              options={{
                delay: 80,
                cursor: '|',
              }}
            />
          </Styled.Intro>
        </Styled.AboutContainer>
        <About />
        <div ref={skillsRef}>
          {showSkills && (
            <Suspense fallback={null}>
              <Skills />
            </Suspense>
          )}
        </div>
        <Experience />
        <Projects />
      </Styled.Main>
      <Footer />
    </Styled.Root>
  )
}

export default Home
