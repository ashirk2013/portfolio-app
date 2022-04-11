import React from 'react';
import { Flex, Box, Heading, Text, Icon } from '@chakra-ui/react';
import { DiAndroid, DiCodeigniter, DiWebplatform } from 'react-icons/di';

const Profile = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      w="100%"
      maxW={{ base: '100vh', md: '130vh' }}
    >
      <Box px={32} py={16}>
        <Heading fontWeight={'extrabold'} color="cyan.500" size={'4xl'}>
          7+
        </Heading>
        <Text color="gray.400">Years of Experience</Text>
      </Box>
      <Box alignSelf={'center'} px={32} py={16}>
        <Text fontWeight={'bold'} fontSize={'xl'}>
          Product designer and developer, specializing in mobile development.
        </Text>
        <Flex direction={{ base: 'column', md: 'row' }} mt={8}>
          <Flex
            rounded={'xl'}
            mt={4}
            mx={1}
            direction={'column'}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify={'flex-end'}
          >
            <Icon color={'white'} p={2} as={DiAndroid} w="24" h="24" />
            <Text color={'white'} p={4} fontSize="xl" fontWeight={'bold'}>
              Android
            </Text>
          </Flex>

          <Flex
            rounded={'xl'}
            mt={4}
            mx={1}
            direction={'column'}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify={'flex-end'}
            _hover={{ bg: 'teal.400' }}
          >
            <Icon color={'black'} p={2} as={DiCodeigniter} w="24" h="24" />
            <Text color={'black'} p={4} fontSize="xl" fontWeight={'bold'}>
              Flutter Apps
            </Text>
          </Flex>

          <Flex
            rounded={'xl'}
            mt={4}
            mx={1}
            direction={'column'}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify={'flex-end'}
            _hover={{ bg: 'green.400' }}
          >
            <Icon color={'black'} p={2} as={DiWebplatform} w="24" h="24" />
            <Text color={'black'} p={4} fontSize="xl" fontWeight={'bold'}>
              Web Apps
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
