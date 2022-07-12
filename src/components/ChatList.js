import React from "react";
import {
  Box,
  Flex,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import ChatBox from "./ChatBox";

const ChatList = () => {
  return (
    <Box flex={1} bg="blue.100" height={"60vh"}>
      <Heading as="h5" size="sm">
        Conversations / All Conversations
      </Heading>
      <Heading as="h4" size={"lg"} color="#fff">
        All Conversations
      </Heading>
      <Tabs variant="soft-rounded" colorScheme="green" p="5">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
        </TabList>
        <Box
          h={"50vh"}
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
