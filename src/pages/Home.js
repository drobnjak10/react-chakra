import React from 'react'
import { Box, Flex } from "@chakra-ui/react";
import ChatList from '../components/ChatList';
import MessageList from '../components/MessageList';
import Tranasaction from '../components/Tranasaction';

const Home = () => {
  return (
    <Box w={"100%"} height="100vh" bg="blue.100">
      <Flex
        align="center"
        justify="center"
        height={{
          lg: "100vh",
          md: "auto",
          sm: "auto",
        }}
        width="90%"
        mx={"auto"}
        gap="30px"
        flexDirection={{ md: "column", sm: "column", lg: "column" }}
        flexWrap='wrap'
      >
        <ChatList />
        <MessageList />
        <Tranasaction />
      </Flex>
    </Box>
  )
}

export default Home