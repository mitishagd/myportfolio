import styled from 'styled-components'

import { LIGHT_THEME } from "../themes/LightTheme";
import { DARK_THEME } from "../themes/DarkTheme";

const Styled = {
  FooterContainer: styled.div<{_isDarkMode: boolean}>`
    text-align: center;
    padding: 20px;
    font-size: 10px;
<<<<<<< HEAD
    color: ${({ _isDarkMode }) => (_isDarkMode ? DARK_THEME.primary : LIGHT_THEME.primary)};
    `
}

type Props = {
    isDarkMode: boolean;
}

const Footer = (props: Props) => {
    return (
        <Styled.FooterContainer _isDarkMode={props.isDarkMode}>
            <p>© Mitisha Ganesha Dodderi. All rights reserved.</p>
        </Styled.FooterContainer>
    )
=======
  `,
}

const Footer = () => {
  return (
    <Styled.FooterContainer>
      <p>© Mitisha Ganesha Dodderi. All rights reserved.</p>
    </Styled.FooterContainer>
  )
>>>>>>> 9b672ef6ef15ad232b648adcccf93ccf9a6ab831
}

export default Footer
