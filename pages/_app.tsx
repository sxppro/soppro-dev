import Directory from '@/components/panes/Directory';
import Gradient from '@/components/panes/Gradient';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider>
      <Head>
        <title>Soppro</title>
        <meta
          name="description"
          content="Soppro's personal website - enjoy :)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex direction={{ base: 'column', lg: 'row' }}>
          <Gradient />
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
          <Directory />
        </Flex>
      </main>
      <Analytics />
    </ChakraProvider>
  );
};

export default MyApp;
