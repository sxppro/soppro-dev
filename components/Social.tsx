import type { FC } from 'react';
import { HStack, Icon } from '@chakra-ui/react';
import { FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa';

const Social: FC = () => {
  return (
    <HStack spacing={24}>
      <Icon as={FaGoogle} boxSize="50"></Icon>
      <Icon as={FaSpotify} boxSize="50"></Icon>
      <Icon as={FaShopify} boxSize="50"></Icon>
    </HStack>
  );
};

export default Social;
