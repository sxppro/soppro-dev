import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import Directory from './panes/Directory';
import Gradient from './panes/Gradient';

const App: FC = () => {
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      justify={{ lg: 'flex-end' }}
    >
      <Gradient>
        <Directory />
      </Gradient>
    </Flex>
  );
};

export default App;
