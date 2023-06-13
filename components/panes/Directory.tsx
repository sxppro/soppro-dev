import Name from '@/public/name.png';
import { gascogne } from '@/utils/fonts';
import {
  Box,
  ButtonGroup,
  Center,
  Flex,
  IconButton,
  Link,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';
import { FiEye, FiEyeOff, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Experience',
    to: '/experience',
  },
  {
    label: 'Showcase',
    to: '/showcase',
  },
  {
    label: 'About',
    to: '/about',
  },
];

const Directory = () => {
  const [transparent, setTransparent] = useState(false);

  return (
    <Center
      w={'full'}
      h={'100vh'}
      px={16}
      py={12}
      className={gascogne.className}
      bg={transparent ? 'transparent' : 'black'}
      flexDir={'column'}
      justifyContent={'space-between'}
      backdropFilter={'auto'}
      backdropBlur={transparent ? 'sm' : 'none'}
      boxShadow={transparent ? 'sm' : 'none'}
      transition={'all 0.3s ease'}
    >
      <Box pos={'relative'} w={36} h={24} alignSelf={'flex-start'}>
        <Image
          src={Name}
          alt={'Joshua Lu'}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <VStack w={'inherit'} alignItems={'flex-start'} spacing={8}>
        {links.map((link) => (
          <Link
            as={NextLink}
            key={link.label}
            href={link.to}
            fontSize={{ base: '4xl', md: '5xl' }}
            color={'white'}
          >
            {link.label}
          </Link>
        ))}
      </VStack>
      <Flex w={'full'}>
        <ButtonGroup
          size={{ base: 'md', md: 'lg' }}
          variant={'link'}
          isAttached
        >
          <IconButton
            as={NextLink}
            aria-label="GitHub"
            icon={<FiGithub />}
            href={'https://github.com/sxppro'}
            target="_blank"
          />
          <IconButton
            as={NextLink}
            aria-label="LinkedIn"
            icon={<FiLinkedin />}
            href={'https://www.linkedin.com/in/joshua-lu/'}
            target="_blank"
          />
          <IconButton
            as={NextLink}
            aria-label="Email"
            icon={<FiMail />}
            href={'mailto:hello@soppro.dev'}
          />
        </ButtonGroup>
        <Spacer />
        <IconButton
          icon={transparent ? <FiEyeOff /> : <FiEye />}
          aria-label="Sidebar transparency toggle"
          variant={'ghost'}
          size={{ base: 'md', md: 'lg' }}
          onClick={() => setTransparent(!transparent)}
        />
      </Flex>
    </Center>
  );
};

export default Directory;
