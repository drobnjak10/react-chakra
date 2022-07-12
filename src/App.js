import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import ChatList from "./components/ChatList";
import MessageList from "./components/MessageList";

function App() {
  return (
    <Flex align="center" justify="center" height={'95vh'} width="90%" mx={'auto'} bg="blue.100">
      <ChatList />
      <MessageList />
      <Box flex={1} bg='green'>3</Box>
    </Flex>
  );
}

export default App;
