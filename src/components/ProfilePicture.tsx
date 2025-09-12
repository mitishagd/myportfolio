import styled from "styled-components";

import Picture from '../assets/Picture.jpg'

const Styled = {
  Container: styled.div`
    text-align: center;
    margin: 50px 50px;
    max-width: 300px;
    scale: 1.25;
    clip-path: circle();
    overflow: hidden;
    justify-content: right;
    align-items: right;
  `,
  Image: styled.img`
    width: 100%;
    height: auto;
  `
}

const ProfilePicture = () => {
  return (
    <Styled.Container>
      <Styled.Image src={Picture} alt="Profile" />
    </Styled.Container>
  )
}

export default ProfilePicture;
