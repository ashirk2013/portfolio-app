import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
  VStack,
  Spacer,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';

const LinkItems = [
  { name: 'HOME', icon: FiHome },
  { name: 'EXPERIENCE', icon: FiTrendingUp },
  { name: 'SKILLS / CV', icon: FiCompass },
  { name: 'PORTFOLIO', icon: FiStar },
  { name: 'COLORMODE', icon: FiSettings },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

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
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
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
        {icon && (
          <Icon
            color={'white'}
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        <Text fontWeight={'bold'} color="white">
          {children}
        </Text>
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
