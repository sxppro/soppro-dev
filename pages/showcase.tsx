import AnimatedContent from '@/components/Content';
import { Heading, Link, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import { FiExternalLink } from 'react-icons/fi';

const ShowcasePage: NextPage = () => {
  return (
    <AnimatedContent blur>
      <VStack alignItems={'flex-start'} spacing={6}>
        <Heading>Work in progress!</Heading>
        <Text fontSize={'lg'}>
          In the meantime, check out my projects over{' '}
          <Link href="https://soppro.dev/#projects" isExternal>
            here
            <FiExternalLink
              style={{ display: 'inline-block', marginLeft: '0.25em' }}
            />
          </Link>
        </Text>
      </VStack>
    </AnimatedContent>
  );
};

export default ShowcasePage;
