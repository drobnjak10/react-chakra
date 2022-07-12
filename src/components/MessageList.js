import {
    Box, Button, Flex,
    Heading,
    IconButton, Input, Stack, Tag,
    Text
} from "@chakra-ui/react";
import React from "react";
import MessageBar from "./Message/MessageBar";
import Reciever from "./Message/Reciever";
import Sender from "./Message/Sender";
import MessageHeader from "./MessageHeader";

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
      <MessageHeader />
      <Box
        height={"50vh"}
        marginTop="20px"
        sx={{
          "&::-webkit-scrollbar": {
            width: "10px",
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(255, 255, 255, 1)`,
          },
        }}
        overflowY={"scroll"}
      >
        <Reciever />
        <Reciever />
        <Sender />
      </Box>
      <MessageBar />
    </Box>
  );
};

export default MessageList;
