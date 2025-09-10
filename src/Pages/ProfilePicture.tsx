import React from "react";
import styled from "styled-components";

import ProfilePic from "../Assets/Picture.JPG";

const Styled = {
  Container: styled.div`
    text-align: center;
    margin: 50px 50px;
    max-width: 300px;
    scale: 1.25;
    clip-path: circle();
    overflow: hidden;
  `,
  Image: styled.img`
    width: 100%;
    height: auto;
  `
}

const ProfilePicture = () => {
  return (
    <Styled.Container>
      <Styled.Image src={ProfilePic} alt="Profile" />
    </Styled.Container>
  )
}

export default ProfilePicture;
