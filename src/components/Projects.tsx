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
  `,
  Title: styled.h2`
    font-size: 24px;
    margin-bottom: 30px;
  `,
  Content: styled.div`
    font-size: 16px;
    line-height: 1.5;
  `,
  ProjectCard: styled.tr`
    margin: 5px 20px;
    padding: 5px 20px;
  `,
  Image: styled.td`
    width: 420px;
    vertical-align: top;
  `,
  Details: styled.td`
    text-align: left;
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
    color: #333;
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
        <table>
          <Styled.ProjectCard>
            <Styled.Image>
              <a target="_blank" href="">
                <img src={cartoonGeneratorGif} alt="Project Screenshot" width="350" />
              </a>
            </Styled.Image>
            <Styled.Details>
              <Styled.ProjectName>Cartoon Generator</Styled.ProjectName>
              <Styled.Description>
                A full-stack application that generates cartoon-style images from user text
                descriptions. Built with React and TypeScript on the frontend, it communicates with
                a serverless AWS Lambda backend that integrates with OpenAI's DALL-E 3 API to create
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
                    href="https://github.com/mitishagd/CartoonGenerator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Styled.ExternalLink /> Demo
                  </Styled.LinkButton>
                </Styled.Links>
              </Styled.Description>
            </Styled.Details>
          </Styled.ProjectCard>
        </table>
      </Styled.Content>
    </Styled.Root>
  )
}

export default Projects
