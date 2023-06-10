import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import Directory from './panes/Directory';
import Gradient from './panes/Gradient';

const App: FC = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }}>
      <Gradient />
      <Directory />
    </Flex>
  );
};

export default App;
