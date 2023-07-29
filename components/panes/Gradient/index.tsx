import GradientFactory from '@/utils/gradient';
import { chakra } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';
import styles from './Gradient.module.css';
import Overlay from './Overlay';

let loaded = false;

const Gradient = ({ children }: PropsWithChildren) => {
  const router = useRouter();

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
        minH={'100vh'}
        w={'100vw'}
        zIndex={-1}
      />
      {router.pathname === '/' && <Overlay />}
      {children}
    </>
  );
};

export default Gradient;
