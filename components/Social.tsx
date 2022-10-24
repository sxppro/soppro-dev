import type { FC } from 'react';
import Image from 'next/future/image';
import { HStack, useBreakpointValue } from '@chakra-ui/react';
import NextLogo from '../public/nextjs.svg';
import Collab from '../public/collab.svg';
import VercelLogo from '../public/favicon.ico';

const Social: FC = () => {
  const size = useBreakpointValue({
    base: 75,
    md: 100,
  });
  return (
    <HStack spacing={16}>
      <Image
        src={NextLogo}
        alt={'Next.js logo'}
        width={size}
        height={size}
        quality={70}
      />
      <Image
        src={Collab}
        alt={'Collab x symbol'}
        width={size ? size / 2 : 50}
        height={size ? size / 2 : 50}
        quality={70}
      />
      <Image
        src={VercelLogo}
        alt={'Vercel logo'}
        width={size}
        height={size}
        quality={70}
      />
    </HStack>
  );
};

export default Social;
