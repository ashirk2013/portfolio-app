import { Box, Flex, Heading, Text, UnorderedList } from '@chakra-ui/react';
import JobBulletItem from './JobBulletItem';

const Job = ({ job }) => {
  const listItems = job.bullets?.map((bullet, index) => {
    return <JobBulletItem key={`${job.client}${index}`} bullet={bullet} />;
  });
  return (
    <Flex direction={{ base: 'column', md: 'row' }}>
      <Box w={{ base: '100%', md: '75%' }}>
        <Heading size={'lg'} textTransform={'uppercase'}>
          {job.title}
        </Heading>
        <Text
          textTransform={'uppercase'}
          fontSize={'lg'}
          color={'gray.700'}
          mb={5}
        >
          {job.client}
        </Text>
        <UnorderedList spacing={1} color={'gray.600'} fontWeight={'semibold'}>
          {listItems}
        </UnorderedList>
        <Text color={'gray.600'} fontWeight={'semibold'}></Text>
      </Box>
      <Box w={{ base: '100%', md: '25%' }} pt={{ base: '1rem', md: '0rem' }}>
        <Text color={'orange.600'}>{job.dates}</Text>
      </Box>
    </Flex>
  );
};

export default Job;
