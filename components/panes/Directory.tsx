import { gascogne } from '@/utils/fonts';
import { Center, Link, VStack } from '@chakra-ui/react';
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
      p={12}
      className={gascogne.className}
    >
      <VStack w={'inherit'} alignItems={'flex-start'} spacing={8} px={6}>
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
    </Center>
  );
};

export default Directory;
