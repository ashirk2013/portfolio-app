import {
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import MainPage from './pages/MainPage';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return <MainPage />
}

export default App;
