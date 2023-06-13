import AnimatedContent from '@/components/panes/Content';
import { Heading, ListItem, Tag, UnorderedList } from '@chakra-ui/react';
import { NextPage } from 'next';

const Work: NextPage = () => {
  return (
    <AnimatedContent blur>
      <Heading fontSize={'6xl'}>Work</Heading>
      <Tag>July 2022 — July 2023</Tag>
      <Heading fontSize={'2xl'}>
        Software Engineer Intern · National Australia Bank
      </Heading>
      <UnorderedList spacing={2}>
        <ListItem>
          Progression and regression testing for business-critical microservices
        </ListItem>
        <ListItem>
          Architecting and implementing the front-end of a new documentation
          portal, contributing to significantly improved developer experience
          for those who wish to find documentation for our services
        </ListItem>
        <ListItem>
          Contributing extensively to uplifting automated test suite and
          integration pipelines, reducing time and effort spent on manual test
          execution
        </ListItem>
      </UnorderedList>
      <Tag>January — June 2022</Tag>
      <Heading fontSize={'2xl'}>Software Engineer · News Perform</Heading>
      <UnorderedList spacing={2}>
        <ListItem>
          Wrote modern, performant, maintainable code across full-stack web
          applications
        </ListItem>
        <ListItem>
          Worked on a variety of facets of web applications, including content
          management, search engine optimisation and DevOps
        </ListItem>
        <ListItem>
          Developed and shipped a revamped user authentication microservice,
          fixing long-term issues in the process
        </ListItem>
        <ListItem>
          Communicated with multi-disciplinary teams of writers, marketers and
          clients on a daily basis
        </ListItem>
      </UnorderedList>
    </AnimatedContent>
  );
};

export default Work;
