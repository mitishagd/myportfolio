import React from "react";
import styled from "styled-components";
import { LinkedInIcon, GithubIcon, MediumIcon, EmailIcon } from "./Icons"

const Styled = {
  Sidebar: styled.div`
    display: block;
    padding: 20px;
    width: 60px
    `,
}

const SocialsSidebar = () => {
    return (
        <Styled.Sidebar>
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
        </Styled.Sidebar>
    )
}

export default SocialsSidebar