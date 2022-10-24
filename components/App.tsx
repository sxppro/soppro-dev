import type { FC } from 'react';
import { VStack, Container } from '@chakra-ui/react';
import Header from './Header';
import Profile from './Profile';
import Social from './Social';
import Navbar from './Navbar';

const App: FC = () => {
  return (
    <Container className="App" maxW={'container.xl'}>
      <VStack p={4} w="100%" mb={24}>
        <Navbar />
        <Header></Header>

        <Social></Social>

        <Profile></Profile>
      </VStack>
    </Container>
  );
};

export default App;
