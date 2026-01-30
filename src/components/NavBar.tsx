import styled from 'styled-components'

const Styled = {
  Container: styled.div``,
  Logo: styled.img`
    height: 75px;
    width: 75px;
    margin: 10px 20px;
  `,
}

const NavBar = () => {
  return (
    <Styled.Container>
      {/* <Styled.Logo src={logo} alt="Logo" /> */}
      {/* <div>About</div>
            <div>Skills</div>
            <div>Experience</div> */}
    </Styled.Container>
  )
}

export default NavBar
