import { Grid, GridItem, Flex, Box, Spacer } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div>
      <Grid
        templateAreas={`
          "header header"
          "nav main"
        `}
        gridTemplateRows={"50px 1fr"}
        gridTemplateColumns={"170px 1fr"}
        h="100vh"
        w="100vw"
        color="blackAlpha.700"
        bg="athensgray.100"
        fontWeight="bold"
      >
        <GridItem bg="athensgray.50" area={"header"} display="flex">
          <Header />
        </GridItem>
        <GridItem pl="2" bg="athensgray.50" area={"nav"}>
          <Nav />
        </GridItem>
        <GridItem pl="2" bg="athensgray.50" area={"main"}>
          <Flex
            bg="athensgray.100"
            w="100%"
            h="93.5vh"
            p="20px"
            borderTopLeftRadius="30px"
          >
            <h1>Hello</h1>
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Layout;
