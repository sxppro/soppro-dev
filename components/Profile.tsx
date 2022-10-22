import type { FC } from 'react';
import {
  theme,
  useMediaQuery,
  Flex,
  Box,
  Heading,
  Text,
  Icon,
} from '@chakra-ui/react';
import { FaNode, FaEthereum, FaReact } from 'react-icons/fa';

const Profile: FC = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');
  return (
    <Flex
      direction={isNotSmallerScreen ? 'row' : 'column'}
      w="100%"
      //   { base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }
      maxWidth={theme.breakpoints}
    >
      {/* Left box */}
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.600" size="4xl">
          1+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      {/* Right box */}
      <Box alignSelf="center" px="32" py="16">
        <Text fontSize="2xl" fontWeight="bold">
          Full-stack Web Developer, passionate about UI and UX design
        </Text>
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}>
          {/* 1st tile */}
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon as={FaNode} p="4" w="24" h="24" color="white" />
            <Text p="4" color="white" fontSize="xl" fontWeight="semibold">
              Web Apps
            </Text>
          </Flex>

          {/* 2nd tile */}
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="purple.300"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon as={FaReact} p="4" w="24" h="24" color="white" />
            <Text p="4" color="white" fontSize="xl" fontWeight="semibold">
              UI & UX Design
            </Text>
          </Flex>

          {/* 3rd tile */}
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="green.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon as={FaEthereum} p="4" w="24" h="24" color="white" />
            <Text p="4" color="white" fontSize="xl" fontWeight="semibold">
              Distributed Apps
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
