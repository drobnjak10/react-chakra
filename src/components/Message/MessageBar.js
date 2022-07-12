import { Button, Input, Stack } from "@chakra-ui/react";
import React from "react";

const MessageBar = () => {
  return (
    <Stack mt="5" direction={"row"} spacing={3} width="100%">
      <Input variant="filled" placeholder="Filled" />
      <Button colorScheme="blue">Send</Button>
    </Stack>
  );
};

export default MessageBar;
