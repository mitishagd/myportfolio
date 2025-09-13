import styled from "styled-components";
import { LinkedInIcon, GithubIcon, MediumIcon, EmailIcon } from "./Icons.tsx"
import logo from '../assets/logo.png'

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
            <Styled.Logo src={logo} alt="Logo" />

            <Styled.Socials>
                <a target="_blank" href="https://www.linkedin.com/in/mitisha-dodderi/">
                <LinkedInIcon size={30} />
            </a>

            <a target="_blank" href="https://github.com/mitishagd">
                <GithubIcon size={30} />
            </a>
            <a target="_blank" href="https://medium.com/@mitisha.dodderi">
                <MediumIcon size={30} />
            </a>
            <a target="_blank" href="mailto:mitisha.dodderi@gmail.com">
                <EmailIcon size={30} />
            </a>
        </Styled.Socials>
        </Styled.Sidebar>
    )
}

export default SocialsSidebar