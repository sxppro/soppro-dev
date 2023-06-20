import AnimatedContent from '@/components/Content';
import { Divider, Text } from '@chakra-ui/react';

const RouteNotFoundPage = () => {
  return (
    <AnimatedContent>
      <Text fontWeight={'semibold'} fontSize={'4xl'} py={8}>
        404
      </Text>
      <Divider orientation="vertical" />
      <Text fontSize={'2xl'} color={'whiteAlpha.700'} py={8}>
        Page not found
      </Text>
    </AnimatedContent>
  );
};

export default RouteNotFoundPage;
