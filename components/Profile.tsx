import type { FC } from 'react';
import { theme, Stack, Flex, Box, Heading, Text, Icon } from '@chakra-ui/react';
import { FaNode, FaEthereum, FaReact } from 'react-icons/fa';

const Profile: FC = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} spacing={16} pt={24}>
      {/* Left box */}
      <Box alignSelf="center">
        <Heading
          fontWeight="extrabold"
          color="cyan.600"
          size="4xl"
          textAlign={'center'}
        >
          1+
        </Heading>
        <Text fontSize="2xl" color="gray.400" textAlign={'center'}>
          Years of Experience
        </Text>
      </Box>
      {/* Right box */}
      <Box alignSelf="center">
        <Text fontSize="2xl" fontWeight="bold">
          Full-stack web developer, passionate about UI and UX design
        </Text>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          mt={8}
          px={{ base: 8, md: 0 }}
          justifyContent={'space-between'}
        >
          {/* 1st tile */}
          <Flex
            rounded="xl"
            direction="column"
            bg="blue.400"
            justify="flex-end"
            w={{ base: '100%', md: '30%' }}
            h="100%"
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
            bg="purple.300"
            justify="flex-end"
            w={{ base: '100%', md: '30%' }}
            h="100%"
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
            bg="green.400"
            justify="flex-end"
            w={{ base: '100%', md: '30%' }}
            h="100%"
          >
            <Icon as={FaEthereum} p="4" w="24" h="24" color="white" />
            <Text p="4" color="white" fontSize="xl" fontWeight="semibold">
              Distributed Apps
            </Text>
          </Flex>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Profile;
