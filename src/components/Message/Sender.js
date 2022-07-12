import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Sender = () => {
  return (
    <Flex gap={"10px"} mt="5" mr="5">
      <Box flex="1">
        <Flex
          w={"80%"}
          gap="5px"
          alignItems={"center"}
          height="40px"
          justify={"right"}
          ms="auto"
        >
          <Heading as="h6" size="sm">
            2ixoafusafpsoakfsfafs
          </Heading>
        </Flex>
        <Stack
          mt="2"
          borderRadius="4px"
          bg="white"
          width={"90%"}
          p="2"
          ms="auto"
        >
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

      <Box width="40px" height={"40px"}>
        <Image
          boxSize="100%"
          objectFit="cover"
          src="https://picsum.photos/id/237/200/300"
          alt="Dan Abramov"
        />
      </Box>
    </Flex>
  );
};

export default Sender;
