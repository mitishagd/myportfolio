import styled from 'styled-components'

const Styled = {
  FooterContainer: styled.div`
    text-align: center;
    padding: 20px;
    font-size: 10px;
  `,
}

const Footer = () => {
  return (
    <Styled.FooterContainer>
      <p>© Mitisha Ganesha Dodderi. All rights reserved.</p>
    </Styled.FooterContainer>
  )
}

export default Footer
