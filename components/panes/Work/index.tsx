'use client';
import {
  Box,
  Heading,
  IconButton,
  ListItem,
  Tag,
  UnorderedList,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Work = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '95%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    {
      role: 'Software Engineer Intern',
      company: 'National Australia Bank',
      time: 'July 2022 — July 2023',
      highlights: [
        'Progression and regression testing for business-critical microservices',
        'Architecting and implementing the front-end of a new documentation portal, contributing to significantly improved developer experience for our services',
        'Contributing extensively to uplifting automated test suite and integration pipelines, reducing time and effort spent on manual test execution',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'News Perform',
      time: 'January — June 2022',
      highlights: [
        'Wrote modern, performant, maintainable code across full-stack web applications',
        'Worked on various facets of web applications, including content management, search engine optimisation and DevOps',
        'Deployed a revamped user authentication microservice, fixing long-term issues',
        'Communicated with multi-disciplinary teams of writers, marketers and clients on a daily basis',
      ],
    },
  ];

  return (
    <Box
      position={'relative'}
      overflow={'hidden'}
      minH={{ base: 'lg', md: 'auto' }}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <FiArrowLeft />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <FiArrowRight />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map(({ role, company, time, highlights }, index) => (
          <Box key={index} mx={{ md: 16 }} w={'auto !important'}>
            <Tag>{time}</Tag>
            <Heading fontSize={'2xl'} py={2}>
              {role} · {company}
            </Heading>
            {highlights && (
              <UnorderedList spacing={3}>
                {highlights.map((highlight, index) => (
                  <ListItem key={index}>{highlight}</ListItem>
                ))}
              </UnorderedList>
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

const WorkItem = () => {
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
