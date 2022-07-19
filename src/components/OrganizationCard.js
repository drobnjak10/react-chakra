import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import OrganizationStack from "./OrganizationStack";

const OrganizationCard = () => {
  return (
    <Box width={"25%"} bg="white" rounded={"lg"} height="90%" padding={"10px"}>
      <Heading textAlign={"center"} as="h6" fontSize={"22px"} padding={22}>
        MegaCrypto
      </Heading>
      <HStack>
        <Button colorScheme="blue" width={"70%"}>
          Open Conversations
        </Button>
        <Button colorScheme="gray" color="darkblue.100" width="30%">
          Settings
        </Button>
      </HStack>
      <Heading textAlign={"center"} as="h6" fontSize={"18px"} padding={22}>
        Todays data
      </Heading>
      <Flex direction={"column"} justifyContent='space-between'>
        <OrganizationStack />
        <OrganizationStack button={"Open"} />
        <OrganizationStack />
        <OrganizationStack />
        <OrganizationStack />
      </Flex>
    </Box>
  );
};

export default OrganizationCard;
