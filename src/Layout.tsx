import { Grid, GridItem, Flex } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

const Layout = () => {
  return (
    <div>
      <Grid
        templateAreas={`
          "header header"
          "nav main"
        `}
        gridTemplateRows={"60px 1fr"}
        gridTemplateColumns={"190px 1fr"}
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
            h="92.5vh"
            pl="30px"
            pt="30px"
            pr="5px"
            pb="5px"
            borderTopLeftRadius="30px"
          >
            <Dashboard></Dashboard>
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Layout;
