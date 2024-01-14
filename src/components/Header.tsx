import { ChevronDownIcon, Search2Icon, StarIcon } from "@chakra-ui/icons";
import {
  Text,
  Flex,
  Box,
  Spacer,
  InputGroup,
  InputLeftElement,
  Input,
  Wrap,
  WrapItem,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { RiMoonClearFill } from "react-icons/ri";

const Header = () => {
  return (
    <div style={{ width: "100%" }}>
      <Flex
        minWidth="max-content"
        align="center"
        h="100%"
        justify="start"
        w="100%"
      >
        <Box
          w="170px"
          p="2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontFamily="dancingscript"
          fontWeight={700}
          color="cerulean.DEFAULT"
        >
          <StarIcon
            bg="cerulean.500"
            color="athensgray.DEFAULT"
            borderRadius="100%"
            boxSize={5}
            p="2px"
            mr="5px"
          />{" "}
          School Presence
        </Box>
        <Box p="2" pl="25px" ml="2px">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="athensgray.500" />
            </InputLeftElement>
            <Input
              variant="filled"
              type="text"
              border="none"
              placeholder="Search ..."
            />
          </InputGroup>
        </Box>
        <Spacer />
        <Box p="2" mr="8px">
          <RiMoonClearFill />
        </Box>
        <Box w="170px" p="5px">
          <Menu>
            <MenuButton
              _hover={{ border: "none" }}
              _focus={{ border: "none" }}
              _active={{ border: "none" }}
            >
              <Wrap
                w="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <WrapItem>
                  <Avatar
                    p="2px"
                    name="User Profile Pics"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
                <WrapItem alignItems="center">
                  <Text fontSize="xs">Hisbil Islami</Text>
                </WrapItem>
                <WrapItem alignItems="center">
                  <ChevronDownIcon />
                </WrapItem>
              </Wrap>
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </div>
  );
};

export default Header;
