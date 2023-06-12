import Name from '@/public/name.png';
import { gascogne } from '@/utils/fonts';
import { Box, Center, IconButton, Link, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Work',
    to: '/work',
  },
  {
    label: 'Contact',
    to: 'mailto:hello@soppro.dev',
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
            fontSize={{ base: '5xl', md: '6xl' }}
            color={'white'}
          >
            {link.label}
          </Link>
        ))}
      </VStack>
      <IconButton
        icon={transparent ? <FiEyeOff /> : <FiEye />}
        aria-label="Sidebar transparency toggle"
        variant={'ghost'}
        onClick={() => setTransparent(!transparent)}
      />
    </Center>
  );
};

export default Directory;
