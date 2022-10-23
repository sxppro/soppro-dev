import {
  Flex,
  Box,
  Heading,
  Spacer,
  Link,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
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
  );
};

export default Navbar;
