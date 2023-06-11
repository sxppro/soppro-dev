import { Center } from '@chakra-ui/react';
import AnimatedText from './AnimatedText';

const GradientOverlay = () => {
  return (
    <Center
      w={'inherit'}
      h={'inherit'}
      pos={'absolute'}
      zIndex={10}
      top={0}
      hideFrom={'md'}
    >
      <AnimatedText />
    </Center>
  );
};

export default GradientOverlay;
