import React from "react";
import styled from "styled-components";

const Styled = {
  Container: styled.div`
    text-align: center;
    font-size: 16px;
    margin: 20px auto;
    line-height: 1.6;
    white-space: pre-line;
    max-width: 550px;
    `
}

const aboutText = "I am a Software Engineer most recently worked on turnkey software to support virtual care experiences for health systems at 98point6 Technologies Inc. \n I started my journey at 98point6 as an intern, I quickly advanced to Software Development Engineer and then to SDE II. My journey involved leading cross-functional teams, improving user experiences, and ensuring web accessibility compliance. I contributed to a 50% reduction in physician visit times and developed automated systems for efficient patient care. I developed innovative solutions that enhance healthcare delivery. I worked on building FHIR-compliant databases, optimizing web applications, and integrating advanced algorithms to streamline healthcare processes. Previously, at Addgene, where I developed new website features, created DjangoCMS plugins for easier content management, and automated tasks using Celery. I played a key role in upgrading legacy systems, refactoring code, and implementing automated testing to enhance the platform's functionality and reliability. Holding an MS in Computer Science from Northeastern University, I bring a deep technical expertise and a passion for driving impactful change through technology. I am adept at collaborating with diverse teams, working under tight deadlines, and managing multiple projects simultaneously. Passionate about leveraging technology to improve lives, I’m eager to connect with like-minded professionals.'"

const About = () => {
    return (
        <Styled.Container>
            {aboutText}
        </Styled.Container>
    )
}

export default About