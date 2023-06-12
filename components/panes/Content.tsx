import { Center } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const Content = ({ children }: PropsWithChildren) => {
  return (
    <Center
      w={'full'}
      h={'100vh'}
      px={16}
      py={12}
      bg={'transparent'}
      flexDir={'column'}
      backdropFilter={'auto'}
      backdropBlur={'sm'}
      boxShadow={'sm'}
      hideBelow={'lg'}
    >
      {children}
    </Center>
  );
};

export default Content;
