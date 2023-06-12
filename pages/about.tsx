import Content from '@/components/panes/Content';
import { Text } from '@chakra-ui/react';
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <Content>
      <Text>
        Hello! My name is Josh and I enjoy designing &amp; creating things by
        typing letters and numbers! My interest in web development started in
        2021 when I decided to play around a UI library called{' '}
        <a href="https://chakra-ui.com/">Chakra</a>. Building things with a UI
        library taught me a lot about web applications!
      </Text>
    </Content>
  );
};

export default About;
