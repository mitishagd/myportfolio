import styled from "styled-components";

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
  SkillsIcon: styled.img<{ size?: number, _isScale?: boolean}>`
    width: 50px;
    height: 50px;
    margin: 30px;
    padding: 5px;
  `,
  SocialsIcon: styled.div<{ size?: number, _isScale?: boolean}>`
    width: 25px;
    height: 25px;
    padding: 10px 5px;
  `,
}


export function LinkedInIcon(props: { color: string; size?: number; className?: string;  }) {
    return <Styled.SocialsIcon {...props}> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={props.color} aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
    </Styled.SocialsIcon> 
}

export function GithubIcon(props: { color: string; size?: number; className?: string; }) {
    return <Styled.SocialsIcon {...props}>
        <svg viewBox="0 0 24 24" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill={props.color}> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
    </Styled.SocialsIcon>

}

export function MediumIcon(props: { color: string; size?: number; className?: string }) {
    return <Styled.SocialsIcon {...props}>
        <svg  fill={props.color} viewBox="0 0 256 256" id="Flat" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M136,128c0,37.49512-28.71,68-64,68S8,165.49514,8,128,36.71,60,72,60,136,90.5049,136,128ZM240,64a8.00039,8.00039,0,0,0-8,8V184a8,8,0,0,0,16,0V72A8.00039,8.00039,0,0,0,240,64Zm-56,0c-5.68262,0-16.39941,2.76074-24.32373,21.251C154.72607,96.8008,152,111.98342,152,128s2.72607,31.19922,7.67627,42.749C167.60059,189.23928,178.31738,192,184,192s16.39941-2.76074,24.32373-21.251C213.27393,159.19924,216,144.01662,216,128s-2.72607-31.19922-7.67627-42.749C200.39941,66.76076,189.68262,64,184,64Z"></path> </g></svg>
        </Styled.SocialsIcon>
}

export function EmailIcon(props: { color: string; size?: number; className?: string }) {
    return <Styled.SocialsIcon {...props}>
        <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill={props.color}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)" fill={props.color}> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#1572]"> </path> </g> </g> </g> </g></svg>
        </Styled.SocialsIcon>;
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

export function MySQLIcon(props: { size?: number; className?: string;  }) {
    return <Styled.SkillsIcon src={mysql} alt="" {...props} />
}

export function NodeJSIcon(props: { size?: number; className?: string;  }) {
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
    return <Styled.SkillsIcon src={vercel} alt=""  {...props} />
}

export function HTMLIcon(props: { size?: number; className?: string }) {
    return <Styled.SkillsIcon src={html} alt="" {...props} />
}

export function CSSIcon(props: { size?: number; className?: string }) {
    return <Styled.SkillsIcon src={css} alt="" {...props} />
}