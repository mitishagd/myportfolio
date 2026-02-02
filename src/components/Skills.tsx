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
  ViteIcon,
  AwsIcon,
  JavaIcon,
  SpringBootIcon,
  MongoDBIcon,
  JenkinsIcon,
  GraphqlIcon,
  DockerIcon,
  NodeJSIcon,
  MySQLIcon,
  JiraIcon,
  NotionIcon,
  SumologicIcon,
  OpenAIIcon,
  AnthropicIcon,
} from './Icons.tsx'

const Styled = {
  Root: styled.section`
    text-align: center;
    margin-left: 15%;
    margin-top: ${({ theme }) => theme.spacing.section};
    width: 70%;
    height: 100%;
    margin-bottom: 150px;
    scroll-margin-top: ${({ theme }) => theme.spacing.section};
  `,
  Title: styled.h2`
    font-size: 26px;
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  `,
  IconWrapper: styled.div`
    padding: 0 5px;
    text-align: center;
  `,
}

const skills = [
  { name: 'React', Icon: ReactIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'JavaScript', Icon: JavaScriptIcon },
  { name: 'HTML', Icon: HTMLIcon },
  { name: 'CSS', Icon: CSSIcon },
  { name: 'Node.js', Icon: NodeJSIcon },
  { name: 'Vite', Icon: ViteIcon },
  { name: 'Python', Icon: PythonIcon },
  { name: 'Django', Icon: DjangoIcon },
  { name: 'Java', Icon: JavaIcon },
  { name: 'Spring Boot', Icon: SpringBootIcon },
  { name: 'GraphQL', Icon: GraphqlIcon },
  { name: 'MySQL', Icon: MySQLIcon },
  { name: 'MongoDB', Icon: MongoDBIcon },
  { name: 'Jenkins', Icon: JenkinsIcon },
  { name: 'Docker', Icon: DockerIcon },
  { name: 'Git', Icon: GitIcon },
  { name: 'Vercel', Icon: VercelIcon },
  { name: 'Jira', Icon: JiraIcon },
  { name: 'Notion', Icon: NotionIcon },
  { name: 'Sumo Logic', Icon: SumologicIcon },
  { name: 'AWS', Icon: AwsIcon },
  { name: 'OpenAI', Icon: OpenAIIcon },
  { name: 'Anthropic', Icon: AnthropicIcon },
]

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
    <Styled.Root id="skills" aria-labelledby="skills-title">
      <Styled.Title id="skills-title">Skills</Styled.Title>
      <Slider {...settings}>
        {skills.map(({ name, Icon }) => (
          <Styled.IconWrapper key={name} role="img" aria-label={name}>
            <Icon />
          </Styled.IconWrapper>
        ))}
      </Slider>
    </Styled.Root>
  )
}

export default Skills
