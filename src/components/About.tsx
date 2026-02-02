import styled from 'styled-components'
import resume from '../assets/resume.pdf'

const Styled = {
  Container: styled.div`
    text-align: center;
    font-size: 16px;
    margin: 0 auto;
    margin-top: 100px;
    padding: 40px;
    line-height: 1.6;
    white-space: pre-line;
    max-width: 600px;
    font-weight: normal;
    height: 100%;
    scroll-margin-top: 100px;
    background: ${({ theme }) => theme.card};
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  `,
  Title: styled.h2`
    font-size: 24px;
    margin-bottom: 50px;
  `,
  ResumeButton: styled.a`
    display: inline-block;
    padding: 8px 16px;
    font-size: 14px;
    background-color: #10b981;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 50px;

    &:hover {
      background-color: #34d399;
    }
  `,
}

const aboutText =
  "I am a Software Engineer, based in Bay Area.\nI most recently worked on turnkey software to support virtual care experiences for health systems at 98point6 Technologies Inc. I started my journey at 98point6 as an intern, I quickly advanced to Software Development Engineer and then to SDE II. My journey involved leading cross-functional teams, improving user experiences, and ensuring web accessibility compliance. I contributed to a 50% reduction in physician visit times and developed automated systems for efficient patient care. I developed innovative solutions that enhance healthcare delivery. I worked on building FHIR-compliant databases, optimizing web applications, and integrating advanced algorithms to streamline healthcare processes. \nPreviously, at Addgene, where I developed new website features, created DjangoCMS plugins for easier content management, and automated tasks using Celery. I played a key role in upgrading legacy systems, refactoring code, and implementing automated testing to enhance the platform's functionality and reliability. \nHolding an MS in Computer Science from Northeastern University, I bring a deep technical expertise and a passion for driving impactful change through technology. I am adept at collaborating with diverse teams, working under tight deadlines, and managing multiple projects simultaneously. Passionate about leveraging technology to improve lives, I’m eager to connect with like-minded professionals."

const About = () => {
  return (
    <Styled.Container id="about">
      <Styled.Title>About Me</Styled.Title>
      {aboutText}
      <div>
        <Styled.ResumeButton href={resume} download="Mitisha_Resume.pdf">
          Download Resume
        </Styled.ResumeButton>
      </div>
    </Styled.Container>
  )
}

export default About
