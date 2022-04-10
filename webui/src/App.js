import {
  Spacer,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml={8} size="md" fontWeight="semibold" color="cyan.400">
          shirkpy
        </Heading>
        <Spacer></Spacer>
        <IconButton
          aria-label="LinkedIn Icon"
          ml={2}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          aria-label="Github Icon"
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={10}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
}

export default App;
