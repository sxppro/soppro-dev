import Name from '@/public/name.png';
import { gascogne } from '@/utils/fonts';
import { Box, Center, Link, Switch, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';

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
    to: '/contact',
  },
  {
    label: 'About',
    to: '/about',
  },
];

const Directory = () => {
  return (
    <Center
      w={'full'}
      h={'100vh'}
      bg={'black'}
      px={16}
      py={12}
      className={gascogne.className}
      flex={{ md: '0 50%' }}
      flexDir={'column'}
      justifyContent={'space-between'}
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
            fontSize={'6xl'}
            color={'white'}
          >
            {link.label}
          </Link>
        ))}
      </VStack>
      <Switch size="lg" />
    </Center>
  );
};

export default Directory;
