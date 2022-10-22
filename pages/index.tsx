import type { NextPage } from 'next';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import App from '../components/App';

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <div>
        <Head>
          <title>Soppro</title>
          <meta
            name="description"
            content="Soppro's personal website - enjoy :)"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <App />
        </main>
      </div>
    </ChakraProvider>
  );
};

export default Home;
