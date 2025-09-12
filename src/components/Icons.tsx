import styled from "styled-components";

import email from '../assets/email.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import medium from '../assets/medium.svg'
import aws from '../assets/aws.svg'
import docker from '../assets/docker.svg'
import django from '../assets/django.svg'
import graphql from '../assets/graphql.svg'
import javascript from '../assets/javascript.svg'
import mongodb from '../assets/mongodb.svg'
import mysql from '../assets/mysql.svg'
import nodejs from '../assets/nodejs.svg'
import python from '../assets/python.svg'
import react from '../assets/react.svg'
import typescript from '../assets/typescript.svg'
import java from '../assets/java.svg'
import jenkins from '../assets/jenkins.svg'
import git from '../assets/git.svg'
import springboot from '../assets/springboot.svg'
import vercel from '../assets/vercel.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'


const Styled = {
  Icon: styled.img<{ size?: number, _isScale?: boolean}>`
    width: ${({ size }) => (size ? `${size}px` : '30px')};
    height: ${({ size }) => (size ? `${size}px` : '30px')};
    padding: 5px;
    ${({ _isScale }) => _isScale && 'scale: 4;'}
  `,
}

// const IconStyle = styled.img`
//   width: 30px;
//   height: 30px;
//   padding: 5px;
//   `

export function LinkedInIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={linkedin} alt="" {...props} />
}

export function GithubIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={github} alt="" {...props} />

}

export function MediumIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={medium} alt="" {...props} />
}

export function EmailIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={email} alt="" {...props} />
}

export function AwsIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={aws} alt="" {...props} />
}

export function DockerIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={docker} alt="" {...props} />
}

export function DjangoIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={django} alt="" {...props} />
}

export function GraphqlIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={graphql} alt="" {...props} />
}

export function JavaScriptIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={javascript} alt="" {...props} />
}

export function MongoDBIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={mongodb} alt="" {...props} />
}

export function MySQLIcon(props: { size?: number; className?: string; _isScale?: boolean }) {
    return <Styled.Icon src={mysql} alt="" {...props} />
}

export function NodeJSIcon(props: { size?: number; className?: string; _isScale?: boolean }) {
    return <Styled.Icon src={nodejs} alt="" {...props} />
}

export function PythonIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={python} alt="" {...props} />
}

export function ReactIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={react} alt="" {...props} />
}

export function TypeScriptIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={typescript} alt="" {...props} />
}

export function JavaIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={java} alt="" {...props} />
}  

export function JenkinsIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={jenkins} alt="" {...props} />
}

export function GitIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={git} alt="" {...props} />
}

export function SpringBootIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={springboot} alt="" {...props} />
}

export function VercelIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={vercel} alt=""  {...props} />
}

export function HTMLIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={html} alt="" {...props} />
}

export function CSSIcon(props: { size?: number; className?: string }) {
    return <Styled.Icon src={css} alt="" {...props} />
}