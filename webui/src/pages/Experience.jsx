import {
  Box,
  Container,
  Grid,
  GridItem,
  Flex,
  Heading,
  Button,
  Link,
  List,
  ListItem,
  ListIcon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaDatabase } from 'react-icons/fa';

const Experience = () => {
  return (
    <Container minH={'100vh'} maxW={'100%'} bg={'white'}>
      <Stack spacing={5}>
        <Box border={'1px'} align="flex-start" justify={'center'} mt={'5rem'}>
          <Heading size={'xl'} textTransform={'uppercase'}>
            <Text as={'span'} color={'gray.600'}>
              EXPERIENCE
            </Text>
          </Heading>
        </Box>
        <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(6, 1fr)">
          <GridItem colSpan={{ base: 6, md: 4 }}>
            <Heading size={'lg'}>Senior Web Developer</Heading>
            <Text
              textTransform={'uppercase'}
              fontSize={'lg'}
              color={'gray.700'}
              mb={5}
            >
              North Wind Group
            </Text>
            <Text color={'gray.600'} fontWeight={'semibold'}>
              Work as tech lead to standardize and mature software engineering
              processes. Build out new applications in React.js and train
              developers on web development best practices. Build out automation
              pipelines.
            </Text>
          </GridItem>
          <GridItem border={'1px'} align={'end'} colSpan={{ base: 6, md: 2 }}>
            <Text color={'orange.600'}>October 2021 - Present</Text>
          </GridItem>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Experience;
