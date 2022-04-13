import {
  Container,
  Stack,
  Link,
  Heading,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

const Home = () => {
  return (
    <Container minH={'100vh'} maxW={'5xl'} bg={'white'}>
      <Stack spacing={4}>
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
            Greer, SC | (719) 359- 1222 - <Link>aaronshirk@gmail.com</Link>
          </Heading>
        </Box>
        <Box as={'p'} border={'1px'}>
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
        <Box as={'p'} border={'1px'}>
          <Heading
            mb={2}
            size={'sm'}
            textTransform={'uppercase'}
            color={'gray.500'}
          >
            Industries:
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            <List spacing={1.5}>
              <ListItem>
                <ListIcon as={FaChevronRight} boxSize={3} />
                DoD Contracting - (USAF)
              </ListItem>
              <ListItem>
                <ListIcon as={FaChevronRight} boxSize={3} />
                Financial / Banking / FinTech
              </ListItem>
              <ListItem>
                <ListIcon as={FaChevronRight} boxSize={3} />
                Ecommerce
              </ListItem>
              <ListItem>
                <ListIcon as={FaChevronRight} boxSize={3} />
                Construction / Engineering
              </ListItem>
              <ListItem>
                <ListIcon as={FaChevronRight} boxSize={3} />
                Professional Services
              </ListItem>
            </List>
          </Text>
        </Box>
        <Box as={'p'} border={'1px'}>
          <Heading
            mb={2}
            size={'sm'}
            textTransform={'uppercase'}
            color={'orange.500'}
          >
            Industry Interests:
          </Heading>
          <Text color={'orange.500'} maxW={'3xl'}>
            <List spacing={1.5}>
              <ListItem>
                <ListIcon as={FaChevronRight} boxSize={3} />
                Astronomy
              </ListItem>
              <ListItem>
                <ListIcon as={FaChevronRight} boxSize={3} />
                Astrophysics
              </ListItem>
              <ListItem>
                <ListIcon as={FaChevronRight} boxSize={3} />
                Medical
              </ListItem>
              <ListItem>
                <ListIcon as={FaChevronRight} boxSize={3} />
                Research
              </ListItem>
              <ListItem>
                <ListIcon as={FaChevronRight} boxSize={3} />
                Environmental / Climate Change
              </ListItem>
            </List>
          </Text>
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
