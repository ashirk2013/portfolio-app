import { Link, Flex, Icon, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ icon, name, ...rest }) => {
  return (
    <Link
      as={NavLink}
      to={`/${name.toLowerCase()}`}
      style={({ isActive }) => {
        return {
          fontWeight: 'bold',
          color: isActive ? 'white' : '',
        };
      }}
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
        }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        <Text>{name}</Text>
      </Flex>
    </Link>
  );
};

export default NavItem;
