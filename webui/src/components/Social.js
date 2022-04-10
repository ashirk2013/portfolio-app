import React from 'react';
import { HStack, Icon } from '@chakra-ui/react';
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa';

function Social(props) {
  return (
    <HStack spacing={24}>
      <Icon as={FaFacebookF} boxSize={10} />
      <Icon as={FaGoogle} boxSize={10} />
      <Icon as={FaSpotify} boxSize={10} />
      <Icon as={FaShopify} boxSize={10} />
    </HStack>
  );
}

export default Social;
