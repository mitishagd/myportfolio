import styled from 'styled-components'
import { LinkedInIcon, GithubIcon, MediumIcon, EmailIcon, GoodreadsIcon } from './Icons.tsx'
import logo from '../assets/icons/logo.png'

const Styled = {
  Sidebar: styled.div`
    display: block;
    padding: 20px;
    width: 60px;
    height: 100vh;
    position: fixed;
    left: 0;
    box-sizing: border-box;

    @media (max-width: 768px) {
      position: relative;
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 20px;
    }
  `,
  Logo: styled.img`
    height: 85px;
    width: 85px;

    @media (max-width: 768px) {
      height: 50px;
      width: 50px;
    }
  `,
  Socials: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    position: fixed;
    left: 0;
    top: 50%;

    @media (max-width: 768px) {
      position: relative;
      width: auto;
      height: auto;
      display: flex;
      flex-direction: row;
      top: 0;
      gap: 8px;
      padding: 0;
      flex-shrink: 0;
    }
  `,
}

const SocialsSidebar = () => {
  return (
    <Styled.Sidebar>
      <Styled.Logo src={logo} alt="Logo" />

      <Styled.Socials>
        <a target="_blank" href="https://www.linkedin.com/in/mitisha-dodderi/">
          <LinkedInIcon />
        </a>

        <a target="_blank" href="https://github.com/mitishagd">
          <GithubIcon />
        </a>
        <a target="_blank" href="mailto:mitisha.dodderi@gmail.com">
          <EmailIcon />
        </a>
        <a target="_blank" href="https://medium.com/@mitisha.dodderi">
          <MediumIcon />
        </a>
        <a target="_blank" href="https://www.goodreads.com/user/show/17540615-mitisha">
          <GoodreadsIcon />
        </a>
      </Styled.Socials>
    </Styled.Sidebar>
  )
}

export default SocialsSidebar
