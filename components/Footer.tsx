import Link from 'next/link';
import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Heading,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{ base: '12', md: '16' }}
    maxW={'container.xl'}
  >
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack
        justify="space-between"
        direction={{ base: 'column', md: 'row' }}
        align="center"
      >
        <Heading bgGradient={'linear(to-r, #f9c58d, #f492f0)'} bgClip="text">
          Soppro
        </Heading>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <Link href={'https://github.com/sxppro'} target="_blank">
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
          </Link>
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text
        fontSize="sm"
        color="subtle"
        textAlign={{ base: 'center', md: 'left' }}
      >
        &copy; {new Date().getFullYear()} Joshua Lu. All rights reserved.
      </Text>
    </Stack>
  </Container>
);

export default Footer;
