import {
    Box,
    Heading,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
  } from "@chakra-ui/react";
  import React from "react";
import ChatBox from "../ChatBox";
import Simple from "./Nav";
  
  const ChatList = () => {
    return (
      <Box flex={'100%'} bg="blue.100" height={"100vh"} width={{ sm: '100%', md: '100%' }}>
        <Simple />
        <Tabs colorScheme="pink" p="2">
          <TabList>
            <Tab style={{ color: "#fff" }}>Tab 1</Tab>
            <Tab style={{ color: "#fff" }}>Tab 2</Tab>
            <Tab style={{ color: "#fff" }}>Tab 3</Tab>
            <Tab style={{ color: "#fff" }}>Tab 4</Tab>
          </TabList>
          <Box
            h={"80vh"}
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
            <TabPanels>
              <TabPanel>
                <ChatBox active />
                <ChatBox />
                <ChatBox />
                <ChatBox />
                <ChatBox />
                <ChatBox />
                <ChatBox />
                <ChatBox />
                <ChatBox />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Box>
        </Tabs>
      </Box>
    );
  };
  
  export default ChatList;
  