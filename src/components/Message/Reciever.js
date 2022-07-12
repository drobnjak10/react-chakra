import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Reciever = () => {
  return (
    <Flex gap={"10px"}>
      <Box width="40px" height={"40px"}>
        <Image
          boxSize="100%"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Box>

      <Box flex="1">
        <Flex w={"80%"} gap="5px" alignItems={"center"} height="40px">
          <Heading as="h6" size="sm">
            2ixoafusafpsoakfsfafs
          </Heading>
          <Text>1 hour ago</Text>
        </Flex>
        <Stack mt="2" borderRadius="4px" bg="white" width={"90%"} p="2">
          <Text p="1" textAlign={"justify"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
            nulla molestias incidunt qui saepe magni consequuntur officia
            recusandae est reprehenderit, sapiente suscipit quasi minus nesciunt
            quidem quaerat, distinctio ipsa necessitatibus! Aliquam ducimus
            eveniet nulla consequuntur labore fugiat dolor ad earum pariatur
            omnis quas, eligendi adipisci, enim quos esse officiis nam
            aspernatur velit totam dolorem. Assumenda nesciunt sit laborum at
            aut.
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Reciever;
