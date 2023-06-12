import GradientFactory from '@/utils/gradient';
import { chakra } from '@chakra-ui/react';
import { PropsWithChildren, useEffect } from 'react';
import styles from './Gradient.module.css';
import Overlay from './Overlay';

const Gradient = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const gradient = new GradientFactory();
    // @ts-expect-error: initGradient bubbles an event; it is not a method
    gradient.initGradient('#soppro-hero-gradient');
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
