import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={6}>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Blog</Link>
          <Link>Contact</Link>
        </Stack>
        <Text>© 2022 Joshua Lu. All rights reserved</Text>
      </Container>
    </Box>
  );
};

export default Footer;
