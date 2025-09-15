import styled from "styled-components";
import { LinkedInIcon, GithubIcon, MediumIcon, EmailIcon } from "./Icons.tsx"
import logo from '../assets/logo.png'
import darkLogo from '../assets/logo-dark.png'

const Styled = {
  Sidebar: styled.div`
    display: block;
    padding: 20px;
    width: 60px;
    height: 100vh;
    position: fixed;
    left: 0;
    `,
  Logo: styled.img`
    height: 85px;
    width: 85px;
    `,
  Socials: styled.div`
  display: block;
    padding: 20px;
    width: 60px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 50%;
    `
}

const SocialsSidebar = () => {
    return (
        <Styled.Sidebar>
            <Styled.Logo src={darkLogo} alt="Logo" />

            <Styled.Socials>
                <a target="_blank" href="https://www.linkedin.com/in/mitisha-dodderi/">
                <LinkedInIcon />
            </a>

            <a target="_blank" href="https://github.com/mitishagd">
                <GithubIcon/>
            </a>
            <a target="_blank" href="https://medium.com/@mitisha.dodderi">
                <MediumIcon />
            </a>
            <a target="_blank" href="mailto:mitisha.dodderi@gmail.com">
                <EmailIcon />
            </a>
        </Styled.Socials>
        </Styled.Sidebar>
    )
}

export default SocialsSidebar