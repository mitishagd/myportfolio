import styled from 'styled-components'

import { profileData } from '../config/profileData'
import VisuallyHidden from './ui/VisuallyHidden'

const Styled = {
  Root: styled.section`
    text-align: center;
    margin-left: 17%;
    width: 65%;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    scroll-margin-top: ${({ theme }) => theme.spacing.section};

    @media (max-width: 768px) {
      margin-left: 5%;
      width: 90%;
    }
  `,
  Title: styled.h2`
    font-size: 26px;
    margin-bottom: 75px;
  `,
  Content: styled.div`
    font-size: 16px;
    line-height: 1.5;

    table {
      border-spacing: 0 50px;
      border-collapse: separate;
    }
  `,
  Position: styled.tr`
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      margin-bottom: ${({ theme }) => theme.spacing.md};
    }
  `,
  Company: styled.a`
    font-style: italic;
    color: ${({ theme }) => theme.primary};
    font-weight: normal;
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
    display: inline-block;

    &:hover {
      transform: scale(1.02);
      opacity: 0.8;
    }
  `,
  Role: styled.div`
    font-weight: bold;
  `,
  Duration: styled.td`
    font-weight: normal;
    min-width: 200px;
    vertical-align: top;
    border-left: 3px solid ${({ theme }) => theme.primary};
    padding-left: 20px;

    @media (max-width: 768px) {
      display: block;
      min-width: auto;
      font-size: 14px;
      color: ${({ theme }) => theme.muted};
      margin-bottom: ${({ theme }) => theme.spacing.xs};
      border-left: none;
      padding-left: 0;
    }
  `,
  Description: styled.ul`
    text-align: left;
    padding-left: 20px;
    margin: 0;
  `,
  RoleAndDescription: styled.td`
    text-align: left;
  `,
}

const Experience = () => {
  return (
    <Styled.Root id="experience" aria-labelledby="experience-title">
      <Styled.Title id="experience-title">Experience</Styled.Title>
      <Styled.Content>
        <table>
          <tbody>
            {profileData.experience.map((job, index) => (
              <Styled.Position key={index}>
                <Styled.Duration>{job.duration}</Styled.Duration>
                <Styled.RoleAndDescription>
                  <Styled.Role>
                    {job.role},{' '}
                    <Styled.Company target="_blank" rel="noreferrer" href={job.companyUrl}>
                      {job.company}
                      <VisuallyHidden>(opens in new tab)</VisuallyHidden>
                    </Styled.Company>
                  </Styled.Role>
                  <Styled.Description>
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </Styled.Description>
                </Styled.RoleAndDescription>
              </Styled.Position>
            ))}
          </tbody>
        </table>
      </Styled.Content>
    </Styled.Root>
  )
}

export default Experience
