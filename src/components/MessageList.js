import React from "react";
import {
  Box,
  Flex,
  Heading,
  Tabs,
  TabList,
  Tag,
  TabPanels,
  TabPanel,
  Text,
  IconButton,
  Avatar,
  Image,
} from "@chakra-ui/react";

const MessageList = () => {
  return (
    <Box height={"60vh"} flex="2">
      <Flex bg="white" borderRadius={"5px"} py="1">
        <Box width="98%" mx="auto" marginLeft="2">
          <Tag bg="pink.100" mr="2">
            Priority
          </Tag>
          <Tag bg="yellow.100">Open</Tag>
        </Box>
        <Flex
          width="100%"
          alignItems={"center"}
          justifyContent="right"
          gap={"10px"}
          marginRight="2"
        >
          <Text fontSize={"sm"}>Assigned To</Text>
          <IconButton colorScheme="teal" aria-label="Call Segun" size="xs" />
          <Heading as="h6" size="sm">
            @Adam
          </Heading>
        </Flex>
      </Flex>

      {/* Message Header */}
      <Flex align="center" mb={"5"} width="100%" as={"a"} href="#" mt="3">
        <Box flex={1}>
          <Image
            boxSize="60px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
        <Box flex={5} marginRight="5" marginLeft={3} alignItems="center">
          <Heading as="h4" size={"sm"}>
            Heading 1
          </Heading>
          <Text noOfLines={1} fontSize="sm">
            "The quick brown fox jumps over the lazy dog".
          </Text>
        </Box>
        <Box flex={1} ml="auto">
          <Text noOfLines={1} fontSize="sm">
            1 hour ago
          </Text>
          <Tag>Priority</Tag>
        </Box>
      </Flex>
    </Box>
  );
};

export default MessageList;
