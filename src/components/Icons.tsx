import styled from 'styled-components'

import email from '../assets/icons/email.svg'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import medium from '../assets/icons/medium.svg'
import aws from '../assets/icons/aws.svg'
import docker from '../assets/icons/docker.svg'
import django from '../assets/icons/django.svg'
import graphql from '../assets/icons/graphql.svg'
import javascript from '../assets/icons/javascript.svg'
import mongodb from '../assets/icons/mongodb.svg'
import mysql from '../assets/icons/mysql.svg'
import nodejs from '../assets/icons/nodejs.svg'
import python from '../assets/icons/python.svg'
import react from '../assets/icons/react.svg'
import typescript from '../assets/icons/typescript.svg'
import java from '../assets/icons/java.svg'
import jenkins from '../assets/icons/jenkins.svg'
import git from '../assets/icons/git.svg'
import springboot from '../assets/icons/springboot.svg'
import vercel from '../assets/icons/vercel.svg'
import html from '../assets/icons/html.svg'
import css from '../assets/icons/css.svg'

const Styled = {
  SocialIcon: styled.img<{ size?: number; _isScale?: boolean }>`
    width: 25px;
    height: 25px;
    padding: 5px;
  `,
  SkillsIcon: styled.img<{ size?: number; _isScale?: boolean }>`
    width: 75px;
    height: 75px;
    margin: 10px;
    padding: 5px;
  `,
}

export function LinkedInIcon(props: { size?: number; className?: string }) {
  return <Styled.SocialIcon src={linkedin} alt="" {...props} />
}

export function GithubIcon(props: { size?: number; className?: string }) {
  return <Styled.SocialIcon src={github} alt="" {...props} />
}

export function MediumIcon(props: { size?: number; className?: string }) {
  return <Styled.SocialIcon src={medium} alt="" {...props} />
}

export function EmailIcon(props: { size?: number; className?: string }) {
  return <Styled.SocialIcon src={email} alt="" {...props} />
}

export function AwsIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={aws} alt="" {...props} />
}

export function DockerIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={docker} alt="" {...props} />
}

export function DjangoIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={django} alt="" {...props} />
}

export function GraphqlIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={graphql} alt="" {...props} />
}

export function JavaScriptIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={javascript} alt="" {...props} />
}

export function MongoDBIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={mongodb} alt="" {...props} />
}

export function MySQLIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={mysql} alt="" {...props} />
}

export function NodeJSIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={nodejs} alt="" {...props} />
}

export function PythonIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={python} alt="" {...props} />
}

export function ReactIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={react} alt="" {...props} />
}

export function TypeScriptIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={typescript} alt="" {...props} />
}

export function JavaIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={java} alt="" {...props} />
}

export function JenkinsIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={jenkins} alt="" {...props} />
}

export function GitIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={git} alt="" {...props} />
}

export function SpringBootIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={springboot} alt="" {...props} />
}

export function VercelIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={vercel} alt="" {...props} />
}

export function HTMLIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={html} alt="" {...props} />
}

export function CSSIcon(props: { size?: number; className?: string }) {
  return <Styled.SkillsIcon src={css} alt="" {...props} />
}
