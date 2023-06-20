import { Center } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Center
      w={'full'}
      h={'100vh'}
      px={16}
      py={12}
      bg={'transparent'}
      hideBelow={'lg'}
    />
  );
};

export default Home;
