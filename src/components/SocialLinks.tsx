import styled from 'styled-components'
import { LinkedInIcon, GithubIcon, MediumIcon, EmailIcon, GoodreadsIcon } from './Icons.tsx'

const Styled = {
  Sidebar: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 768px) {
      display: none;
    }
  `,
}

export const SocialLinks = () => {
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/mitisha-dodderi/"
        aria-label="LinkedIn (opens in new tab)"
      >
        <LinkedInIcon />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/mitishagd"
        aria-label="GitHub (opens in new tab)"
      >
        <GithubIcon />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="mailto:mitisha.dodderi@gmail.com"
        aria-label="Send Email"
      >
        <EmailIcon />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://medium.com/@mitisha.dodderi"
        aria-label="Medium (opens in new tab)"
      >
        <MediumIcon />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.goodreads.com/user/show/17540615-mitisha"
      >
        <GoodreadsIcon />
      </a>
    </>
  )
}

const SocialLinksSidebar = () => {
  return (
    <Styled.Sidebar>
      <SocialLinks />
    </Styled.Sidebar>
  )
}

export default SocialLinksSidebar
