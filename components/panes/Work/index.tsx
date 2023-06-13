import {
  Box,
  Heading,
  ListItem,
  Tag,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';

const Work = () => {
  return (
    <VStack spacing={8}>
      <Box>
        <Tag>July 2022 — July 2023</Tag>
        <Heading fontSize={'2xl'} py={2}>
          Software Engineer Intern · National Australia Bank
        </Heading>
        <UnorderedList spacing={1}>
          <ListItem>
            Progression and regression testing for business-critical
            microservices
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
      </Box>

      <Box>
        <Tag>January — June 2022</Tag>
        <Heading fontSize={'2xl'} py={2}>
          Software Engineer · News Perform
        </Heading>
        <UnorderedList spacing={1}>
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
      </Box>
    </VStack>
  );
};

export default Work;
