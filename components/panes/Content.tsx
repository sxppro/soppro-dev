import { Center } from '@chakra-ui/react';

const Content = () => {
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
    />
  );
};

export default Content;
