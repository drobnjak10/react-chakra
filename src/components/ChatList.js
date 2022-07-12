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
    <Box flex={1} bg="blue.100">
      <Heading as="h4" size={"lg"}>
        Heading 1
      </Heading>
      <Tabs variant="soft-rounded" colorScheme="green" p="5">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ChatBox/>
            <ChatBox/>
            <ChatBox/>
            <ChatBox/>
            <ChatBox/>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ChatList;
