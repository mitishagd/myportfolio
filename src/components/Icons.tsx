import styled from "styled-components";

import email from '../assets/email.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import medium from '../assets/medium.svg'


const IconStyle = styled.img`
  width: 30px;
  height: 30px;
  padding: 5px;
  `

export function LinkedInIcon(props: { size?: number; className?: string }) {
    return <IconStyle src={linkedin} alt="" />
}

export function GithubIcon(props: { size?: number; className?: string }) {
    return <IconStyle src={github} alt="" />

}

export function MediumIcon(props: { size?: number; className?: string }) {
    return <IconStyle src={medium} alt="" />
}

export function EmailIcon(props: { size?: number; className?: string }) {
    return <IconStyle src={email} alt="" />
}