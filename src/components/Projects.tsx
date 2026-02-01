import styled from 'styled-components'
import cartoonGeneratorGif from '../assets/gifs/cartoon-generator.gif'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Styled = {
  Root: styled.div`
    text-align: center;
    margin-left: 17%;
    width: 65%;
    margin-top: 40px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      margin-left: 5%;
      width: 90%;
    }
  `,
  Title: styled.h2`
    font-size: 24px;
    margin-bottom: 30px;
  `,
  Content: styled.div`
    font-size: 16px;
    line-height: 1.5;
  `,
  ProjectCard: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 25px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,
  Image: styled.div`
    width: 420px;
    flex-shrink: 0;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      margin-bottom: 15px;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
  `,
  Details: styled.div`
    text-align: left;
    flex: 1;
  `,
  ProjectName: styled.div`
    font-weight: bold;
  `,
  Description: styled.div`
    margin-top: 10px;
  `,
  Links: styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
  `,
  LinkButton: styled.a`
    display: inline-flex;
    align-items: center;
    margin-right: 10px;
    margin-top: 10px;
    padding: 8px 30px;
    border: 1px solid #000;
    font-size: 14px;
    color: #10b981;
  `,
  Github: styled(FaGithub)`
    margin-right: 8px;
  `,
  ExternalLink: styled(FaExternalLinkAlt)`
    margin-right: 8px;
  `,
}

const Projects = () => {
  return (
    <Styled.Root>
      <Styled.Title>Projects</Styled.Title>
      <Styled.Content>
        <Styled.ProjectCard>
          <Styled.Image>
            <img src={cartoonGeneratorGif} alt="Project Screenshot" width="350" />
          </Styled.Image>
          <Styled.Details>
            <Styled.ProjectName>Cartoon Generator</Styled.ProjectName>
            <Styled.Description>
              A full-stack application that generates cartoon-style images from user text
              descriptions. Built with React and TypeScript on the frontend, it communicates with a
              serverless AWS Lambda backend that integrates with OpenAI's DALL-E 3 API to create
              custom cartoon illustrations in real-time.
              <Styled.Links>
                <Styled.LinkButton
                  href="https://github.com/mitishagd/CartoonGenerator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Styled.Github /> Code
                </Styled.LinkButton>
                <Styled.LinkButton
                  href="https://cartoon-generator-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Styled.ExternalLink /> Demo
                </Styled.LinkButton>
              </Styled.Links>
            </Styled.Description>
          </Styled.Details>
        </Styled.ProjectCard>
      </Styled.Content>
    </Styled.Root>
  )
}

export default Projects
