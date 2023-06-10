import GradientFactory from '@/utils/gradient';
import { VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import styles from './Gradient.module.css';
import GradientOverlay from './GradientOverlay';

const Gradient = () => {
  useEffect(() => {
    const gradient = new GradientFactory();
    // @ts-expect-error: initGradient bubbles an event; it is not a method
    gradient.initGradient('#soppro-hero-gradient');
    return () => {
      gradient && gradient.disconnect();
    };
  });

  return (
    <VStack w={'full'} h={'100vh'}>
      <canvas id={'soppro-hero-gradient'} className={styles.gradient}></canvas>
      <GradientOverlay />
    </VStack>
  );
};

export default Gradient;
