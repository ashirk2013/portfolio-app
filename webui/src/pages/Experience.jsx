import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';

import Job from '../components/Job';
import experience from '../data/experience';

const Experience = () => {
  console.log(experience);
  const jobList = experience.map((job, index) => {
    return <Job key={`${job.title}${index}`} job={job} />;
  });
  return (
    <Container minH={'100vh'} maxW={'100%'} bg={'white'}>
      <Stack spacing={5}>
        <Box align="flex-start" justify={'center'} mt={'5rem'}>
          <Heading size={'xl'} textTransform={'uppercase'}>
            <Text as={'span'} color={'gray.600'}>
              EXPERIENCE
            </Text>
          </Heading>
        </Box>
        {jobList}
      </Stack>
    </Container>
  );
};

export default Experience;
