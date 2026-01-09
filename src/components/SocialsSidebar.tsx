import styled from 'styled-components'
import { LinkedInIcon, GithubIcon, MediumIcon, EmailIcon } from './Icons.tsx'
import logo from '../assets/logo.png'
import darkLogo from '../assets/logo-dark.png'
import { DARK_THEME } from '../themes/DarkTheme.tsx'
import { LIGHT_THEME } from '../themes/LightTheme.tsx'

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
  `,
}

type Props = {
  isDarkMode: boolean
}

const SocialsSidebar = (props: Props): React.JSX.Element => {
  const theme = props.isDarkMode ? DARK_THEME : LIGHT_THEME

  return (
    <Styled.Sidebar>
      <Styled.Logo src={props.isDarkMode ? darkLogo : logo} alt="Logo" />

      <Styled.Socials>
        <a target="_blank" href="https://www.linkedin.com/in/mitisha-dodderi/">
          <LinkedInIcon color={theme.primary} />
        </a>

        <a target="_blank" href="https://github.com/mitishagd">
          <GithubIcon color={theme.primary} />
        </a>
        <a target="_blank" href="https://medium.com/@mitisha.dodderi">
          <MediumIcon color={theme.primary} />
        </a>
        <a target="_blank" href="mailto:mitisha.dodderi@gmail.com">
          <EmailIcon color={theme.primary} />
        </a>
      </Styled.Socials>
    </Styled.Sidebar>
  )
}

export default SocialsSidebar
