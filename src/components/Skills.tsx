import styled from "styled-components";

import { DjangoIcon, JavaScriptIcon, PythonIcon, ReactIcon, TypeScriptIcon, HTMLIcon, CSSIcon, GitIcon, VercelIcon, AwsIcon, JavaIcon, SpringBootIcon, MongoDBIcon, JenkinsIcon, GraphqlIcon, DockerIcon, NodeJSIcon, MySQLIcon } from "./Icons.tsx";
import { DARK_THEME } from "../themes/DarkTheme.tsx";
import { LIGHT_THEME } from "../themes/LightTheme.tsx";

const Styled = {
  Root: styled.div`
    text-align: center;
    margin-left: 15%;
    width: 70%;
    height: 100%;
    margin-bottom: 100px;
  `,
  Title: styled.h2<{_isDarkMode: boolean}>`
    color: ${({ _isDarkMode }) => (_isDarkMode ? DARK_THEME.primary : LIGHT_THEME.primary)};
    font-size: 24px;
    margin-bottom: 80px;
  `,
};

type Props = {
    isDarkMode: boolean;
}

const Skills = (props: Props): React.JSX.Element => {
    return (
        <Styled.Root>
            <Styled.Title _isDarkMode={props.isDarkMode}>Skills</Styled.Title>
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