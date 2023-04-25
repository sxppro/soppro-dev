import type { FC } from 'react';
import Image from 'next/future/image';
import { HStack, useBreakpointValue } from '@chakra-ui/react';
import NextLogo from '../public/nextjs.svg';
import Collab from '../public/collab.svg';
import SelfLogo from '../public/android-chrome-512x512.png';

const Social: FC = () => {
  const size = useBreakpointValue({
    base: 75,
    md: 100,
  });
  return (
    <HStack spacing={16}>
      <Image
        src={NextLogo}
        alt={'Next.js'}
        width={size}
        height={size}
        quality={70}
      />
      <Image
        src={Collab}
        alt={'X'}
        width={size ? size / 2 : 50}
        height={size ? size / 2 : 50}
        quality={70}
      />
      <Image
        style={{
          borderRadius: '10%',
        }}
        src={SelfLogo}
        alt={'Soppro'}
        width={size}
        height={size}
        quality={70}
      />
    </HStack>
  );
};

export default Social;
