import React from 'react';
import {
  useColorMode,
  Stack,
  Circle,
  Flex,
  Box,
  useMediaQuery,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const { isBiggerScreen } = useMediaQuery('(min-width: 600px)');

  const OpenLinkedIn = () => {
    window.open('https://www.linkedin.com/in/aaronshirk/');
  };

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        p={{ base: '0', md: '32' }}
        spacing="200px"
        alignSelf="flex-start"
      >
        <Box mt={{ base: '0', md: '16' }} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Aaron Shirk
          </Text>
          <Text color={isDark ? 'gray.200' : 'gray.500'}>
            Developer - React, Python, aspiring Data Scientist &#x1F4CA;
          </Text>
          <Button mt={5} colorScheme={'blue'} onClick={OpenLinkedIn}>
            Say Hello
          </Button>
        </Box>
        <Image
          alignSelf={'center'}
          my={{ base: '12', md: '0' }}
          backgroundColor="transparent"
          boxShadow={'lg'}
          borderRadius="full"
          boxSize={250}
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHZezaKSbrtyA/profile-displayphoto-shrink_800_800/0/1561480175086?e=1654732800&v=beta&t=Smh63QLaJifoeTLT_s78fy2002KiKbW6EWb4zqESzBY"
        />
      </Flex>
    </Stack>
  );
};

export default Header;
