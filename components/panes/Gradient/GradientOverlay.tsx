import { Center, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const FIVE_SECONDS = 5000;

const greetings = ['Hi', 'Bonjour', '你好', 'Yes'];

const GradientOverlay = () => {
  const [index, setIndex] = useState(0);
  const [greeting, setGreeting] = useState(greetings[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      index === greetings.length - 1 ? setIndex(0) : setIndex(index + 1);
      setGreeting(greetings[index]);
    }, FIVE_SECONDS);
    return () => clearInterval(interval);
  });

  return (
    <Center
      w={'inherit'}
      h={'inherit'}
      pos={'absolute'}
      zIndex={10}
      top={0}
      hideFrom={'md'}
    >
      <Heading fontSize={'6xl'}>{greeting}</Heading>
    </Center>
  );
};

export default GradientOverlay;
