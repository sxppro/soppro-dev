import GradientFactory from '@/utils/gradient';
import { chakra } from '@chakra-ui/react';
import { PropsWithChildren, useEffect } from 'react';
import styles from './Gradient.module.css';
import Overlay from './Overlay';

let loaded = false;

const Gradient = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const gradient = new GradientFactory();

    // Gradient background will only be loaded once
    if (!loaded) {
      console.log('Gradient re-rendered');
      // @ts-expect-error: initGradient bubbles an event; it is not a method
      gradient.initGradient('#soppro-hero-gradient');
      loaded = true;
    }
    return () => {
      gradient && gradient.disconnect();
    };
  });

  return (
    <>
      <chakra.canvas
        id={'soppro-hero-gradient'}
        className={styles.gradient}
        pos={{ lg: 'fixed' }}
        h={'100vh'}
        zIndex={-1}
      />
      <Overlay />
      {children}
    </>
  );
};

export default Gradient;
