import type { FC } from 'react';
import { Circle, Flex, Stack, Box, Text } from '@chakra-ui/react';
import { useColorMode, Button, Image } from '@chakra-ui/react';

const Header: FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="lightblue"
        opacity="0.1"
        maxW={'300px'}
        maxH={'300px'}
        alignSelf="flex-end"
      ></Circle>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        p={{ base: 4, md: 32 }}
        alignSelf="flex-start"
      >
        <Box mt={{ base: 16, md: 0 }} mr={{ base: 0, md: 16 }}>
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="6xl"
            fontWeight="bold"
            bgGradient="linear(to-tr, #84ffc9 0%, #aab2ff 35%, #eca0ff 70%)"
            bgClip="text"
          >
            Joshua Lu
          </Text>
          <Text color={isDark ? 'gray.200' : 'gray.500'}>
            Web Developer—React, Vue, GraphQL, AWS
          </Text>
          <Button
            mt={8}
            colorScheme="purple"
            onClick={() => window.open('https://soppro.dev')}
          >
            Contact Me
          </Button>
        </Box>
        <Image
          src={'/profile.png'}
          alt="Profile picture of Soppro"
          alignSelf="center"
          mt={{ base: 12, md: 0 }}
          mb={{ base: 12, md: 0 }}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
        ></Image>
      </Flex>
    </Stack>
  );
};

export default Header;
