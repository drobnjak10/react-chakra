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

const AddOrganization = () => {
  return (
    <Box
      width={{ lg: "25%", sm: "100%", md: "100%" }}
      bg="white"
      rounded={"lg"}
      height={{
        base: "90vh",
        md: "auto",
      }}
      padding={"10px"}
    >
      <Heading textAlign={"center"} as="h6" fontSize={"22px"} padding={22}>
        Add New
      </Heading>
      <HStack justifyContent='center'>
        <Button colorScheme="blue">
          Add New Company
        </Button>
      </HStack>
    </Box>
  );
};

export default AddOrganization;
