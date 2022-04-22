import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  Icon,
  Text,
  Flex,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = ({ icon, ...rest }) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('light', 'dark');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: 'orange.500',
        color: 'white',
      }}
      {...rest}
    >
      <Icon color={'gray.700'} mr="4" fontSize="16" as={SwitchIcon} />
      <Text fontWeight={'bold'} color="gray.700">
        Colormode
      </Text>
      {/* <Button
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="outline"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
        Color Mode
      /> */}
    </Flex>
  );
};
