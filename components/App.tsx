import { Flex } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';
import Directory from './panes/Directory';

const App = ({ children }: PropsWithChildren) => {
  return (
    <Flex direction={{ base: 'column', lg: 'row' }}>
      {children}
      <Directory />
    </Flex>
  );
};

export default App;
