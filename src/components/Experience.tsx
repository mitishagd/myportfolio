import styled from 'styled-components'
import { profileData } from '../config/profileData'
import VisuallyHidden from './VisuallyHidden'

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
  `,
  Position: styled.div`
    margin: 5px 20px;
    margin-bottom: 50px;
    padding: 5px 20px;
    border-left: 3px solid ${({ theme }) => theme.primary};
    padding-left: 20px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
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
  Duration: styled.div`
    font-weight: normal;
    font-size: 14px;
    color: grey;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  `,
  Description: styled.ul`
    text-align: left;
    margin-left: -20px;
  `,
  RoleAndDescription: styled.div`
    text-align: left;
  `,
}

const Experience = () => {
  return (
    <Styled.Root id="experience" aria-labelledby="experience-title">
      <Styled.Title id="experience-title">Experience</Styled.Title>
      <Styled.Content>
        {profileData.experience.map((job, index) => (
          <Styled.Position key={index}>
            <Styled.Duration>{job.duration}</Styled.Duration>
            <Styled.RoleAndDescription>
              <Styled.Role>
                {job.role},{' '}
                <Styled.Company target="_blank" href={job.companyUrl}>
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
      </Styled.Content>
    </Styled.Root>
  )
}

export default Experience
