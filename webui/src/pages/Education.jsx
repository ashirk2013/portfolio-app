import { Box, Container, Heading, Stack, Text, Flex } from '@chakra-ui/react';

import EducationItem from '../components/EducationItem';
import education from '../data/education';

const Education = () => {
  const educationList = education.map((item, index) => {
    return <EducationItem key={`${item.university}${index}`} item={item} />;
  });
  return (
    <Container minH={'100vh'} maxW={'100%'} bg={'white'}>
      <Stack spacing={5}>
        <Box align="flex-start" justify={'center'} mt={'10rem'}>
          <Heading size={'xl'} textTransform={'uppercase'}>
            <Text as={'span'} color={'gray.700'}>
              EDUCATION
            </Text>
          </Heading>
        </Box>
        {educationList}
      </Stack>
    </Container>
  );
};

export default Education;
