import { Grid, GridItem, Flex, Box, Spacer } from "@chakra-ui/react";

const Layout = () => {
  return (
    <div>
      <Grid
        templateAreas={`
          "header header"
          "nav main"
          "nav footer"
        `}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"170px 1fr"}
        h="100vh"
        w="100vw"
        gap="1"
        color="blackAlpha.700"
        bg="athensgray.100"
        fontWeight="bold"
      >
        <GridItem bg="athensgray.50" area={"header"}>
          <Flex minWidth="max-content" align="center" h="100%" justify="start">
            <Box w="170px" bg="red" p="2">
              Hello
            </Box>
            <Box bg="red" p="2" ml="2px">
              Hello
            </Box>
            <Spacer />
            <Box bg="red" p="2" mr="2px">
              Hello
            </Box>
            <Box w="170px" bg="red" p="2">
              Hello
            </Box>
          </Flex>
        </GridItem>
        <GridItem pl="2" bg="athensgray.50" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="athensgray.50" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="2" bg="athensgray.50" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </div>
  );
};

export default Layout;
