import {
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import SimpleSidebar from './components/SimpleSidebar';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return <SimpleSidebar />
}

export default App;
