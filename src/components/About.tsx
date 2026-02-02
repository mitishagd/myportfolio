import styled from 'styled-components'

import resume from '../assets/resume.pdf'
import { profileData } from '../config/profileData'
import { PrimaryButton } from './ui/Button'

const Styled = {
  Root: styled.section`
    text-align: center;
    font-size: 16px;
    margin: 0 auto;
    margin-top: ${({ theme }) => theme.spacing.section};
    padding: ${({ theme }) => theme.spacing.lg};
    line-height: 1.6;
    white-space: pre-line;
    max-width: 600px;
    font-weight: normal;
    height: 100%;
    scroll-margin-top: ${({ theme }) => theme.spacing.section};
    background: ${({ theme }) => theme.card};
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  `,
  Title: styled.h2`
    font-size: 26px;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  `,
  ResumeButton: styled(PrimaryButton)`
    margin-top: 20px;
    margin-bottom: 50px;
  `,
}

const About = () => {
  return (
    <Styled.Root id="about" aria-labelledby="about-title">
      <Styled.Title id="about-title">About Me</Styled.Title>
      {profileData.aboutText}
      <div>
        <Styled.ResumeButton href={resume} download="Mitisha_Resume.pdf">
          Download Resume
        </Styled.ResumeButton>
      </div>
    </Styled.Root>
  )
}

export default About
