import styled from "styled-components";

import { DjangoIcon, JavaScriptIcon, PythonIcon, ReactIcon, TypeScriptIcon, HTMLIcon, CSSIcon, GitIcon, VercelIcon, AwsIcon, JavaIcon, SpringBootIcon, MongoDBIcon, JenkinsIcon, GraphqlIcon, DockerIcon, NodeJSIcon, MySQLIcon } from "./Icons";

const Styled = {
  Root: styled.div`
    text-align: center;
    margin-left: 15%;
    width: 70%;
    margin-bottom: 40px;

  `,
  Title: styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
  `,
  MySQLIcon: styled(MySQLIcon)`
    margin: 10px;
    scale: 4;
  `,
};

const Skills = () => {
    return (
        <Styled.Root>
            <Styled.Title>Skills</Styled.Title>
            <ReactIcon size={100} />
            <TypeScriptIcon size={100} /> 
            <JavaScriptIcon size={100} />
            <HTMLIcon size={100} />
            <CSSIcon size={100} />
            <NodeJSIcon size={100} />
            <PythonIcon size={100} />
            <DjangoIcon size={100} />
            <JavaIcon size={100} />
            <SpringBootIcon size={100} />
            <GraphqlIcon size={100} />
            <Styled.MySQLIcon _isScale/>
            <MongoDBIcon size={100} />
            <JenkinsIcon size={100} />
            <DockerIcon size={100} />
            <GitIcon size={100} />
            <VercelIcon size={100} />
            <AwsIcon size={100} />
        </Styled.Root>
    )
}

export default Skills;