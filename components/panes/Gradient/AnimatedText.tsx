import { Heading } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, useEffect, useState } from 'react';

const FIVE_SECONDS = 5000;

const greetings = ['Hi', 'Bonjour', '你好', 'Yes'];

type TextProps = {
  greeting: string;
};

const Text = forwardRef<HTMLHeadingElement, TextProps>((props, ref) => {
  const { greeting } = props;

  return (
    <Heading ref={ref} fontSize={'6xl'}>
      {greeting}
    </Heading>
  );
});

Text.displayName = 'GradientText';

const FramerMotionisedText = motion(Text);

const AnimatedText = () => {
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
    <AnimatePresence mode="wait">
      <FramerMotionisedText
        greeting={greeting}
        key={greeting}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </AnimatePresence>
  );
};

export default AnimatedText;
