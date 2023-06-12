import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import Content from './panes/Content';
import Directory from './panes/Directory';
import Gradient from './panes/Gradient';

const App: FC = () => {
  return (
    <Flex direction={{ base: 'column', lg: 'row' }}>
      <Gradient>
        <Content />
        <Directory />
      </Gradient>
    </Flex>
  );
};

export default App;
