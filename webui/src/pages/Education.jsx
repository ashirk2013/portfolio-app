import { Box, Container, Heading, Stack, Text, Flex } from '@chakra-ui/react';

import Job from '../components/Job';
// import experience from '../data/experience';

const Education = () => {
  //   console.log(experience);
  //   const jobList = experience.map((job, index) => {
  //     return <Job key={`${job.title}${index}`} job={job} />;
  //   });
  return (
    <Container minH={'100vh'} maxW={'100%'} bg={'white'}>
      <Stack spacing={5} border={'1px'}>
        <Box border={'1px'} align="flex-start" justify={'center'} mt={'5rem'}>
          <Heading size={'xl'} textTransform={'uppercase'}>
            <Text as={'span'} color={'gray.700'}>
              EDUCATION
            </Text>
          </Heading>
        </Box>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box mt={'1rem'} w={{ base: '100%', md: '75%' }}>
            <Heading size={'lg'}>
              University of Colorado, Colorado Springs
            </Heading>
            <Text
              textTransform={'uppercase'}
              fontSize={'lg'}
              color={'gray.700'}
              mb={3}
            >
              Masters of Science
            </Text>
            <Text color={'gray.700'}>Space Operations Engineering</Text>
            <Text color={'gray.700'}>GPA: 4.00</Text>

            <Text color={'gray.600'} fontWeight={'semibold'}></Text>
          </Box>
          <Box
            mt={'1rem'}
            align={{ base: 'start', md: 'end' }}
            w={{ base: '100%', md: '25%' }}
            pt={{ base: '1rem', md: '0rem' }}
          >
            <Text color={'orange.600'}>1998</Text>
          </Box>
        </Flex>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box mt={'1rem'} w={{ base: '100%', md: '75%' }}>
            <Heading size={'lg'}>The Ohio State University</Heading>
            <Text
              textTransform={'uppercase'}
              fontSize={'lg'}
              color={'gray.700'}
              mb={3}
            >
              Computer Information Science and Engineering
            </Text>
            <Text color={'gray.700'}>Space Operations Engineering</Text>
            <Text color={'gray.700'}>GPA: 3.89</Text>

            <Text color={'gray.600'} fontWeight={'semibold'}></Text>
          </Box>
          <Box
            mt={'1rem'}
            align={{ base: 'start', md: 'end' }}
            w={{ base: '100%', md: '25%' }}
            pt={{ base: '1rem', md: '0rem' }}
          >
            <Text color={'orange.600'}>1997</Text>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Education;
