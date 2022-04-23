import {
  Box,
  Container,
  Flex,
  Heading,
  Button,
  Link,
  List,
  ListItem,
  ListIcon,
  Stack,
  Text,
  UnorderedList,
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
        <Flex direction={{ base: 'column', md: 'row' }} border={'1px'}>
          <Box border={'1px'} borderColor="red" w={{ base: '100%', md: '75%' }}>
            <Heading size={'lg'}>Senior Web Developer</Heading>
            <Text
              textTransform={'uppercase'}
              fontSize={'lg'}
              color={'gray.700'}
              mb={5}
            >
              North Wind Group
            </Text>
            <UnorderedList
              spacing={1}
              color={'gray.600'}
              fontWeight={'semibold'}
            >
              <ListItem>
                Lead the development team towards modern application development
                using ReactJS, ASP.NET Core, Sql Server as the primary
                development stack and Azure and Azure DevOps for managed cloud
                services
              </ListItem>
              <ListItem>
                Develop and maintain corporate applications utilized by all
                subsidiary businesses; example applications include Vaccine
                Status System, Lease Application, Total Compensation, and
                Purchase Requisition
              </ListItem>
              <ListItem>
                Establish, promote, and train on standard development practices,
                process, and coding standards based on Agile and modern
                development workflows (i.e. git/github - GitFlow, dev
                build/deploy pipelines)
              </ListItem>
              <ListItem>
                Maintain corporate legacy applications in Drupal/Ubuntu, MS
                SharePoint, ASP.NET MVC
              </ListItem>
            </UnorderedList>
            <Text color={'gray.600'} fontWeight={'semibold'}></Text>
          </Box>
          <Box
            border={'1px'}
            borderColor="red"
            align={'end'}
            w={{ base: '100%', md: '25%' }}
          >
            <Text color={'orange.600'}>October 2021 - Present</Text>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Experience;
