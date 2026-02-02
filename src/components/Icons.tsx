import styled from 'styled-components'
import { FaGoodreads, FaJava, FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiSpringboot,
  SiGraphql,
  SiMysql,
  SiMongodb,
  SiJenkins,
  SiDocker,
  SiGit,
  SiVercel,
  SiAmazon,
  SiOpenai,
  SiAnthropic,
  SiVite,
  SiJira,
  SiNotion,
  SiSumologic,
} from 'react-icons/si'

const Styled = {
  SocialIcon: styled.div`
    display: inline-block;
    padding: 5px;

    svg {
      width: 25px;
      height: 25px;
      color: ${({ theme }) => (theme.isDark ? theme.text : theme.primary)};
    }
  `,
  SkillsIcon: styled.div`
    display: inline-block;
    padding: 5px;

    svg {
      width: 50px;
      height: 50px;
      ${({ theme }) => theme.isDark && `color: ${theme.muted} !important;`}
    }

    @media (max-width: 480px) {
      svg {
        width: 40px;
        height: 40px;
      }
    }
  `,
}

export function LinkedInIcon() {
  return (
    <Styled.SocialIcon>
      <FaLinkedin />
    </Styled.SocialIcon>
  )
}

export function GithubIcon() {
  return (
    <Styled.SocialIcon>
      <FaGithub />
    </Styled.SocialIcon>
  )
}

export function MediumIcon() {
  return (
    <Styled.SocialIcon>
      <FaMedium />
    </Styled.SocialIcon>
  )
}

export function EmailIcon() {
  return (
    <Styled.SocialIcon>
      <FaEnvelope style={{ width: '23px', height: '23px' }} />
    </Styled.SocialIcon>
  )
}

export function GoodreadsIcon() {
  return (
    <Styled.SocialIcon>
      <FaGoodreads />
    </Styled.SocialIcon>
  )
}

export function ReactIcon() {
  return (
    <Styled.SkillsIcon>
      <SiReact color="#61DAFB" />
    </Styled.SkillsIcon>
  )
}

export function TypeScriptIcon() {
  return (
    <Styled.SkillsIcon>
      <SiTypescript color="#3178C6" />
    </Styled.SkillsIcon>
  )
}

export function JavaScriptIcon() {
  return (
    <Styled.SkillsIcon>
      <SiJavascript color="#F7DF1E" />
    </Styled.SkillsIcon>
  )
}

export function HTMLIcon() {
  return (
    <Styled.SkillsIcon>
      <SiHtml5 color="#E34F26" />
    </Styled.SkillsIcon>
  )
}

export function CSSIcon() {
  return (
    <Styled.SkillsIcon>
      <SiCss3 color="#1572B6" />
    </Styled.SkillsIcon>
  )
}

export function NodeJSIcon() {
  return (
    <Styled.SkillsIcon>
      <SiNodedotjs color="#339933" />
    </Styled.SkillsIcon>
  )
}

export function PythonIcon() {
  return (
    <Styled.SkillsIcon>
      <SiPython color="#3776AB" />
    </Styled.SkillsIcon>
  )
}

export function DjangoIcon() {
  return (
    <Styled.SkillsIcon>
      <SiDjango color="#092E20" />
    </Styled.SkillsIcon>
  )
}

export function JavaIcon() {
  return (
    <Styled.SkillsIcon>
      <FaJava color="#007396" />
    </Styled.SkillsIcon>
  )
}

export function SpringBootIcon() {
  return (
    <Styled.SkillsIcon>
      <SiSpringboot color="#6DB33F" />
    </Styled.SkillsIcon>
  )
}

export function GraphqlIcon() {
  return (
    <Styled.SkillsIcon>
      <SiGraphql color="#E10098" />
    </Styled.SkillsIcon>
  )
}

export function MySQLIcon() {
  return (
    <Styled.SkillsIcon>
      <SiMysql color="#4479A1" />
    </Styled.SkillsIcon>
  )
}

export function MongoDBIcon() {
  return (
    <Styled.SkillsIcon>
      <SiMongodb color="#47A248" />
    </Styled.SkillsIcon>
  )
}

export function JenkinsIcon() {
  return (
    <Styled.SkillsIcon>
      <SiJenkins color="#D24939" />
    </Styled.SkillsIcon>
  )
}

export function DockerIcon() {
  return (
    <Styled.SkillsIcon>
      <SiDocker color="#2496ED" />
    </Styled.SkillsIcon>
  )
}

export function GitIcon() {
  return (
    <Styled.SkillsIcon>
      <SiGit color="#F05032" />
    </Styled.SkillsIcon>
  )
}

export function VercelIcon() {
  return (
    <Styled.SkillsIcon>
      <SiVercel color="#000000" />
    </Styled.SkillsIcon>
  )
}

export function AwsIcon() {
  return (
    <Styled.SkillsIcon>
      <SiAmazon color="#FF9900" />
    </Styled.SkillsIcon>
  )
}

export function OpenAIIcon() {
  return (
    <Styled.SkillsIcon>
      <SiOpenai color="#412991" />
    </Styled.SkillsIcon>
  )
}

export function AnthropicIcon() {
  return (
    <Styled.SkillsIcon>
      <SiAnthropic color="#191919" />
    </Styled.SkillsIcon>
  )
}

export function ViteIcon() {
  return (
    <Styled.SkillsIcon>
      <SiVite color="#646CFF" />
    </Styled.SkillsIcon>
  )
}

export function JiraIcon() {
  return (
    <Styled.SkillsIcon>
      <SiJira color="#0052CC" />
    </Styled.SkillsIcon>
  )
}

export function NotionIcon() {
  return (
    <Styled.SkillsIcon>
      <SiNotion color="#000000" />
    </Styled.SkillsIcon>
  )
}

export function SumologicIcon() {
  return (
    <Styled.SkillsIcon>
      <SiSumologic color="#000099" />
    </Styled.SkillsIcon>
  )
}
