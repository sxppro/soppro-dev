import type { FC } from 'react';
import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
  Box,
  Link,
} from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import Header from './Header';
import Profile from './Profile';
import Social from './Social';

const App: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box className="App" w="100%">
      <VStack p={4}>
        <Flex w="100%">
          <Box p={2}>
            <Heading
              ml={8}
              size="md"
              fontWeight="semibold"
              color="cyan.600"
            ></Heading>
          </Box>

          <Spacer />

          {/* GitHub */}
          <Link href="https://github.com/sxppro" target="_blank">
            <IconButton
              aria-label="Display icon buttons"
              icon={<FaGithub />}
            ></IconButton>
          </Link>

          {/* LinkedIn */}
          <IconButton
            aria-label="Display icon buttons"
            ml={2}
            icon={<FaLinkedin />}
          ></IconButton>
          {/* Toggle dark mode */}
          <IconButton
            aria-label="Display icon buttons"
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>

        <Header></Header>

        <Social></Social>

        <Profile></Profile>
      </VStack>
    </Box>
  );
};

export default App;
