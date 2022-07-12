import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import ChatList from "./components/ChatList";

function App() {
  return (
    <Flex align="center" justify="center" height={'95vh'} width="90%" mx={'auto'}>
      <ChatList />
      <Box flex={2} bg='red'>2</Box>
      <Box flex={1} bg='green'>3</Box>
    </Flex>
  );
}

export default App;
