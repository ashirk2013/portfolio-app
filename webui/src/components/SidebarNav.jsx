import {
  Box,
  Flex,
  Image,
  CloseButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiUserCheck, FiTrendingUp, FiCompass, FiStar } from 'react-icons/fi';

import NavItem from './NavItem';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const LinkItems = [
  { name: 'ABOUT', icon: FiUserCheck },
  { name: 'EXPERIENCE', icon: FiTrendingUp },
  { name: 'CV', icon: FiCompass },
  { name: 'PORTFOLIO', icon: FiStar },
];

const SidebarNav = ({ onClose, ...rest }) => {
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
          borderRadius={'100%'}
          borderStyle="solid"
          borderWidth={'0.5rem'}
          borderColor={'whiteAlpha.400'}
          boxSize={'160px'}
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHZezaKSbrtyA/profile-displayphoto-shrink_800_800/0/1561480175086?e=1654732800&v=beta&t=Smh63QLaJifoeTLT_s78fy2002KiKbW6EWb4zqESzBY"
        />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box pt={5}>
        {LinkItems.map(link => (
          <NavItem key={link.name} icon={link.icon} name={link.name} />
        ))}
      </Box>
      <ColorModeSwitcher />
    </Box>
  );
};

export default SidebarNav;
