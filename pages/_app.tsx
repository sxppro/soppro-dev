import Directory from '@/components/panes/Directory';
import Gradient from '@/components/panes/Gradient';
import theme from '@/utils/theme';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <Head>
          <title>Joshua Lu</title>
          <meta name="description" content="Josh's personal website :)" />
          <meta name="theme-color" content="#000000" />
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
    </>
  );
};

export default MyApp;
