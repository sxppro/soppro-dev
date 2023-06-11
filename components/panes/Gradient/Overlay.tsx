import { Center } from '@chakra-ui/react';
import AnimatedText from './AnimatedText';

const Overlay = () => {
  return (
    <Center
      w={'100vw'}
      h={'100vh'}
      pos={'absolute'}
      zIndex={10}
      top={0}
      hideFrom={'md'}
    >
      <AnimatedText />
    </Center>
  );
};

export default Overlay;
