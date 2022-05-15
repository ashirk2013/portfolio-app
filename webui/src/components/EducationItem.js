import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const EducationItem = ({ item }) => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }}>
      <Box mt={'1rem'} w={{ base: '100%', md: '75%' }}>
        <Heading textTransform={'uppercase'} size={'lg'}>
          {item.university}
        </Heading>
        <Text
          textTransform={'uppercase'}
          fontSize={'lg'}
          color={'gray.700'}
          mb={3}
        >
          {item.degree}
        </Text>
        <Text fontWeight={'semibold'} color={'gray.500'}>
          {item.degreeProgram}
        </Text>
        <Text fontWeight={'semibold'} color={'gray.500'}>
          GPA: {item.gpa}
        </Text>
      </Box>
      <Box
        mt={'1rem'}
        align={{ base: 'start', md: 'end' }}
        w={{ base: '100%', md: '25%' }}
        pt={{ base: '1rem', md: '0rem' }}
      >
        <Text color={'orange.600'}>{item.gradYear}</Text>
      </Box>
    </Flex>
  );
};

export default EducationItem;
