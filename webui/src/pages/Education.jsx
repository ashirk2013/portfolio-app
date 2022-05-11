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
      <Stack spacing={5}>
        <Box align="flex-start" justify={'center'} mt={'5rem'}>
          <Heading size={'xl'} textTransform={'uppercase'}>
            <Text as={'span'} color={'gray.600'}>
              EDUCATION
            </Text>
          </Heading>
        </Box>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box w={{ base: '100%', md: '75%' }}>
            <Heading size={'lg'}>
              University of Colorado, Colorado Springs
            </Heading>
            <Text
              textTransform={'uppercase'}
              fontSize={'lg'}
              color={'gray.700'}
              mb={5}
            >
              Masters of Science
            </Text>

            <Text color={'gray.600'} fontWeight={'semibold'}></Text>
          </Box>
          <Box
            align={{ base: 'start', md: 'end' }}
            w={{ base: '100%', md: '25%' }}
            pt={{ base: '1rem', md: '0rem' }}
          >
            <Text color={'orange.600'}>1998</Text>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Education;
