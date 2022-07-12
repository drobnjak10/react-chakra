import {
  Avatar, Box,
  Flex, Heading, Tag, Text
} from "@chakra-ui/react";
import React from "react";

const ChatBox = () => {
  return (
    <Flex align="center" mb={"5"} width="100%" as={"a"} href="#">
      <Box flex={1}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
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
    // );
  );
};

export default ChatBox;
