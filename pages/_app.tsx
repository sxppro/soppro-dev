import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer';

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
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
};

export default MyApp;
