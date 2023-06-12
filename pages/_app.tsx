import Directory from '@/components/panes/Directory';
import Gradient from '@/components/panes/Gradient';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
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
        <Gradient />
        <Flex direction={{ base: 'column', lg: 'row' }}>
          <Component {...pageProps} />
          <Directory />
        </Flex>
      </main>
      <Analytics />
    </ChakraProvider>
  );
};

export default MyApp;
