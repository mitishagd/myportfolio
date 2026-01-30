import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
  DjangoIcon,
  JavaScriptIcon,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
  HTMLIcon,
  CSSIcon,
  GitIcon,
  VercelIcon,
  AwsIcon,
  JavaIcon,
  SpringBootIcon,
  MongoDBIcon,
  JenkinsIcon,
  GraphqlIcon,
  DockerIcon,
  NodeJSIcon,
  MySQLIcon,
  OpenAIIcon,
  AnthropicIcon,
} from './Icons.tsx'

const Styled = {
  Root: styled.div`
    text-align: center;
    margin-left: 15%;
    width: 70%;
    height: 100%;
    margin-bottom: 100px;
  `,
  Title: styled.h2`
    font-size: 24px;
    margin-bottom: 80px;
  `,
  IconWrapper: styled.div`
    padding: 0 5px;
    text-align: center;
  `,
}

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <Styled.Root>
      <Styled.Title>Skills</Styled.Title>
      <Slider {...settings}>
        <Styled.IconWrapper>
          <ReactIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <TypeScriptIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <JavaScriptIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <HTMLIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <CSSIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <NodeJSIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <PythonIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <DjangoIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <JavaIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <SpringBootIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <GraphqlIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <MySQLIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <MongoDBIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <JenkinsIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <DockerIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <GitIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <VercelIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <AwsIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <OpenAIIcon />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <AnthropicIcon />
        </Styled.IconWrapper>
      </Slider>
    </Styled.Root>
  )
}

export default Skills
