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
        <Box mt={{ base: 16, md: 0 }} mr={{ base: 0, md: 8 }}>
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="6xl"
            fontWeight="bold"
            bgGradient="linear(to-tr, yellow.200 0%, orange.400 35%, purple.500 70%)"
            bgClip="text"
          >
            Soppro
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
          alignSelf="center"
          mt={{ base: 12, md: 0 }}
          mb={{ base: 12, md: 0 }}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://linustechtips.com/uploads/monthly_2018_04/5ae41d9a07a20_Unicornbyryky(2).png.7e21b078da632b89e63ac1a1354accf8.png"
          alt="Profile picture of Soppro"
        ></Image>
      </Flex>
    </Stack>
  );
};

export default Header;
