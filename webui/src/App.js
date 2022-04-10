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
import SimpleNavBar from './components/SimpleSidebar';
import Social from './components/Social';
import Profile from './components/Profile';
import SimpleSidebar from './components/SimpleSidebar';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return <SimpleSidebar>hello</SimpleSidebar>;
}

export default App;
