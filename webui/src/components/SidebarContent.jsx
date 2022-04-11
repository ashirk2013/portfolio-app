import {
  Box,
  Flex,
  Image,
  CloseButton,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from 'react-icons/fi';

import NavItem from './NavItem';

const LinkItems = [
  { name: 'HOME', icon: FiHome },
  { name: 'EXPERIENCE', icon: FiTrendingUp },
  { name: 'CV', icon: FiCompass },
  { name: 'PORTFOLIO', icon: FiStar },
  { name: 'COLORMODE', icon: FiSettings },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      pt={{ base: '0', md: '100' }}
      bg={useColorModeValue('orange.600', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="40" alignItems="center" mx="8" justifyContent={'space-between'}>
        <Image
          backgroundColor="transparent"
          boxShadow={'lg'}
          borderRadius="full"
          boxSize={130}
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHZezaKSbrtyA/profile-displayphoto-shrink_800_800/0/1561480175086?e=1654732800&v=beta&t=Smh63QLaJifoeTLT_s78fy2002KiKbW6EWb4zqESzBY"
        />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box pt={5}>
        {LinkItems.map(link => (
          <NavItem key={link.name} icon={link.icon} name={link.name} />
        ))}
      </Box>
    </Box>
  );
};

export default SidebarContent;
