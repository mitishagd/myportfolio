import styled from 'styled-components'

import { SocialLinks } from './SocialLinks.tsx'

const Styled = {
  FooterContainer: styled.div`
    text-align: center;
    padding: 20px;
    font-size: 10px;
  `,
  Socials: styled.div`
    display: none;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      display: flex;
    }
  `,
}

const Footer = () => {
  return (
    <Styled.FooterContainer>
      <Styled.Socials>
        <SocialLinks />
      </Styled.Socials>
      <p>© 2026 Mitisha Ganesha Dodderi. All rights reserved.</p>
    </Styled.FooterContainer>
  )
}

export default Footer
