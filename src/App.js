import { Box, Flex, Heading } from "@chakra-ui/react";
import "./App.css";
import AddOrganization from "./components/AddOrganization";
import OrganizationCard from "./components/OrganizationCard";

function App() {
  return (
    <Box
      w={"100%"}
      height={{
        base: "100vh",
        md: "auto",
        sm: "auto",
      }}
      bg="blue.100"
      paddingBottom="32"
    >
      <Heading w={"90%"} mx="auto">
        Select organization
      </Heading>
      <Flex
        justifyContent="center"
        height={"100%"}
        width="90%"
        mx={"auto"}
        gap="30px"
        flexWrap={"wrap"}
        flexDirection={{ lg: "row", md: "column", sm: "column" }}
      >
        <OrganizationCard />
        <OrganizationCard />
        <OrganizationCard />
        <AddOrganization />
      </Flex>
    </Box>
  );
}

export default App;
