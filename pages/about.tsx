import AnimatedContent from '@/components/Content';
import { Link, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <AnimatedContent blur>
      <VStack spacing={3}>
        <Text fontSize={'lg'}>
          Heya! I&apos;m Josh and I enjoy designing &amp; creating things by
          typing letters and numbers!{' '}
        </Text>
        <Text fontSize={'lg'}>
          My interest in web development started in 2021 when I decided to play
          around a UI library called{' '}
          <Link href="https://chakra-ui.com/">Chakra</Link>. Building things
          with a UI library taught me a lot about web applications!
        </Text>
      </VStack>
    </AnimatedContent>
  );
};

export default About;
