import {
  Box,
  Container,
  HStack,
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

// const SocialButton = ({ icon, label, href }) => {
//   return <IconButton aria-label={label} as={'a'} href={href} icon={icon} />;
// };

const About = () => {
  return (
    <Container minH={'100vh'} maxW={'100%'} bg={'white'}>
      <Stack spacing={5}>
        <Box border={'1px'} align="flex-start" justify={'center'} mt={'10rem'}>
          <Heading size={'4xl'} textTransform={'uppercase'}>
            <Text as={'span'} color={'gray.600'}>
              Aaron
            </Text>{' '}
            <Text as={'span'} color={'orange.600'}>
              Shirk
            </Text>
          </Heading>
        </Box>
        <Box border={'1px'}>
          <Heading size={'md'} textTransform={'uppercase'} color={'gray.500'}>
            Greer, SC &middot; (719) 359- 1222 &middot;{' '}
            <Link href="mailto:aaronshirk@gmail.com">aaronshirk@gmail.com</Link>
          </Heading>
        </Box>
        <Box border={'1px'}>
          <Text color={'gray.500'} maxW={'3xl'}>
            I'm an experienced software developer and engineer and aspiring data
            scientist. Most of the last 10 years of my career has been spent
            applying various software frameworks to build out web applications.
            I love this, and think it's a great use case for technology.
            Recently however I've found myself also very interested and curious
            in analytical and scientific applications of computing and because
            of this I am currently in the process of shifting my skills sets
            towards mathematics, statistics and data.
          </Text>
        </Box>
        <Box border={'1px'}>
          <Heading
            mb={2}
            size={'sm'}
            textTransform={'uppercase'}
            color={'gray.500'}
          >
            Industries:
          </Heading>
          <List spacing={1.5}>
            <ListItem color={'gray.500'}>
              <ListIcon as={FiChevronRight} boxSize={3} />
              DoD Contracting - (USAF)
            </ListItem>
            <ListItem color={'gray.500'}>
              <ListIcon as={FiChevronRight} boxSize={3} />
              Financial / Banking / FinTech
            </ListItem>
            <ListItem color={'gray.500'}>
              <ListIcon as={FiChevronRight} boxSize={3} />
              Ecommerce
            </ListItem>
            <ListItem color={'gray.500'}>
              <ListIcon as={FiChevronRight} boxSize={3} />
              Construction / Engineering
            </ListItem>
            <ListItem color={'gray.500'}>
              <ListIcon as={FiChevronRight} boxSize={3} />
              Professional Services
            </ListItem>
          </List>
        </Box>
        <Box border={'1px'}>
          <Heading
            mb={2}
            size={'sm'}
            textTransform={'uppercase'}
            color={'orange.500'}
          >
            Industry Interests:
          </Heading>
          <List spacing={1.5}>
            <ListItem>
              <ListIcon as={FiChevronRight} boxSize={3} />
              Astronomy
            </ListItem>
            <ListItem>
              <ListIcon as={FiChevronRight} boxSize={3} />
              Astrophysics
            </ListItem>
            <ListItem>
              <ListIcon as={FiChevronRight} boxSize={3} />
              Medical
            </ListItem>
            <ListItem>
              <ListIcon as={FiChevronRight} boxSize={3} />
              Research
            </ListItem>
            <ListItem>
              <ListIcon as={FiChevronRight} boxSize={3} />
              Environmental / Climate Change
            </ListItem>
          </List>
        </Box>
        <HStack pb={5} border={'1px'} align={'center'} spacing={10}>
          <Button
            leftIcon={<FaGithub />}
            as={'a'}
            href={'https://github.com/ashirk2013'}
            target={'_blank'}
            colorScheme={'gray'}
          >
            Github
          </Button>
          <Button
            leftIcon={<FaLinkedin />}
            as={'a'}
            href={'https://www.linkedin.com/in/aaronshirk/'}
            target={'_blank'}
            colorScheme={'gray'}
          >
            LinkedIn
          </Button>
          <Button
            leftIcon={<FaDatabase />}
            as={'a'}
            href={'https://www.datacamp.com/profile/aaronshirk'}
            target={'_blank'}
            colorScheme={'gray'}
          >
            DataCamp
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
};

export default About;
