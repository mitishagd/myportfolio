import styled from "styled-components";

const Styled = {
  Container: styled.div`
    `
}

const NavBar = () => {
    return (
        <Styled.Container>
            <div>About</div>
            <div>Skills</div>
            <div>Experience</div>
        </Styled.Container>
    )
}

export default NavBar;