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

      {/* LinkedIn */}
      <Link href="https://www.linkedin.com/in/joshua-lu/" target={'_blank'}>
        <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
      </Link>
      {/* GitHub */}
      <Link href="https://github.com/sxppro" target={'_blank'}>
        <IconButton aria-label="GitHub" ml={2} icon={<FaGithub />} />
      </Link>
      {/* Toggle dark mode */}
      <IconButton
        aria-label="Toggle dark mode"
        ml={4}
        icon={isDark ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Navbar;
