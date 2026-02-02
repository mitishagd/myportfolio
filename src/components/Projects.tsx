import { FaExternalLinkAlt,FaGithub } from 'react-icons/fa'
import styled from 'styled-components'

import cartoonGeneratorVideo from '../assets/videos/cartoon-generator.mp4'
import { profileData } from '../config/profileData'
import { SecondaryButton } from './ui/Button'
import VisuallyHidden from './ui/VisuallyHidden'

const Styled = {
  Root: styled.section`
    text-align: center;
    margin-left: 17%;
    width: 65%;
    margin-top: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    scroll-margin-top: ${({ theme }) => theme.spacing.section};

    @media (max-width: 768px) {
      margin-left: 5%;
      width: 90%;
    }
  `,
  Title: styled.h2`
    font-size: 26px;
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

    img,
    video {
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
  LinkButton: styled(SecondaryButton)`
    margin-right: 10px;
    margin-top: 10px;
  `,
  Github: styled(FaGithub)`
    margin-right: ${({ theme }) => theme.spacing.xs};
  `,
  ExternalLink: styled(FaExternalLinkAlt)`
    margin-right: ${({ theme }) => theme.spacing.xs};
  `,
}

const Projects = () => {
  const projectVideos: Record<string, string> = {
    cartoonGenerator: cartoonGeneratorVideo,
  }

  return (
    <Styled.Root id="projects" aria-labelledby="projects-title">
      <Styled.Title id="projects-title">Projects</Styled.Title>
      <Styled.Content>
        {profileData.projects.map((project, index) => (
          <Styled.ProjectCard key={index}>
            <Styled.Image>
              <video
                autoPlay
                loop
                muted
                playsInline
                width="350"
                height="200"
                aria-label={project.name}
              >
                <source src={projectVideos[project.image]} type="video/mp4" />
              </video>
            </Styled.Image>
            <Styled.Details>
              <Styled.ProjectName>{project.name}</Styled.ProjectName>
              <Styled.Description>
                {project.description}
                <Styled.Links>
                  <Styled.LinkButton
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Styled.Github /> Code
                    <VisuallyHidden>(opens in new tab)</VisuallyHidden>
                  </Styled.LinkButton>
                  <Styled.LinkButton
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Styled.ExternalLink /> Demo
                    <VisuallyHidden>(opens in new tab)</VisuallyHidden>
                  </Styled.LinkButton>
                </Styled.Links>
              </Styled.Description>
            </Styled.Details>
          </Styled.ProjectCard>
        ))}
      </Styled.Content>
    </Styled.Root>
  )
}

export default Projects
