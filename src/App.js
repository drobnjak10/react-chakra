import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import ChatList from "./components/ChatList";
import MessageList from "./components/MessageList";
import Tranasaction from "./components/Tranasaction";

function App() {
  return (
    <Box w={'100%'} height='100vh' bg="blue.100">
      <Flex align="center" justify="center" height={'100vh'} width="90%" mx={'auto'} gap='30px'>
      <ChatList />
      <MessageList />
      <Tranasaction />
    </Flex>
    </Box>
  );
}

export default App;
