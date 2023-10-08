import AnimatedContent from '@/components/Content';
import { Link, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <AnimatedContent blur>
      <VStack spacing={3} alignItems={'flex-start'}>
        <Text fontSize={'lg'}>
          Heya! I&apos;m Josh and I enjoy designing &amp; creating experiences
          by typing letters and numbers!{' '}
        </Text>
        <Text fontSize={'lg'}>
          My interest in web development started in 2021 when I decided to play
          around a UI library called{' '}
          <Link href="https://chakra-ui.com/" textDecoration={'underline'}>
            Chakra
          </Link>
          . Building things with a UI library taught me a lot about web
          applications and gave me a lot of inspiration to quickly build out my
          ideas.
        </Text>
        <Text fontSize={'lg'}>
          If you want to know a bit more about my background, check out my{' '}
          <Link href="https://read.cv/jplu" textDecoration={'underline'}>
            read.cv
          </Link>
          . It contains details about some of the projects I&apos;ve worked on,
          awards and education!
        </Text>
      </VStack>
    </AnimatedContent>
  );
};

export default About;
