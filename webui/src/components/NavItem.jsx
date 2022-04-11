import { Link, Flex, Icon, Text} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';


const NavItem = ({ icon, name, ...rest }) => {
    return (
      <Link
        as={NavLink}
        to={`/${name.toLowerCase()}`}
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
            {name}
          </Text>
        </Flex>
      </Link>
    );
  };

  export default NavItem;