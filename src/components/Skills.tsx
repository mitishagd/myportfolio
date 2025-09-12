import styled from "styled-components";

import { DjangoIcon, JavaScriptIcon, PythonIcon, ReactIcon, TypeScriptIcon, HTMLIcon, CSSIcon, GitIcon, VercelIcon, AwsIcon, JavaIcon, SpringBootIcon, MongoDBIcon, JenkinsIcon, GraphqlIcon, DockerIcon, NodeJSIcon, MySQLIcon } from "./Icons.tsx";

const Styled = {
  Root: styled.div`
    text-align: center;
    margin-left: 15%;
    width: 70%;
    height: 100vh;
  `,
  Title: styled.h2`
    font-size: 24px;
    margin-bottom: 80px;
  `,
};

const Skills = () => {
    return (
        <Styled.Root>
            <Styled.Title>Skills</Styled.Title>
            <ReactIcon />
            <TypeScriptIcon />
            <JavaScriptIcon />
            <HTMLIcon />
            <CSSIcon />
            <NodeJSIcon />
            <PythonIcon />
            <DjangoIcon />
            <JavaIcon />
            <SpringBootIcon />
            <GraphqlIcon />
            <MySQLIcon  />
            <MongoDBIcon />
            <JenkinsIcon />
            <DockerIcon />
            <GitIcon />
            <VercelIcon />
            <AwsIcon />
        </Styled.Root>
    )
}

export default Skills;