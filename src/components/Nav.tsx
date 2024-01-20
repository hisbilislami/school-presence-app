import { GoChecklist } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";
import { Box, Link, Stack, Button } from "@chakra-ui/react";

const Nav = () => {
  return (
    <div>
      <Box
        display="flex"
        h="85vh"
        flexDirection="column"
        justifyContent="space-between"
        pt="20px"
        px="10px"
      >
        <Stack direction="column" spacing={4} mt={10} w="100%">
          <Link href="#">
            <Button
              leftIcon={<MdSpaceDashboard color="athensgray.50" />}
              isActive={true}
              size="md"
              color="gray.500"
              fontSize={12}
              justifyContent="start"
              variant="ghost"
              _hover={{
                background: "cerulean.DEFAULT",
                border: "none",
                color: "white",
              }}
              _focus={{
                background: "cerulean.DEFAULT",
                border: "none",
                color: "white",
              }}
              _active={{
                background: "cerulean.DEFAULT",
                border: "none",
                color: "white",
              }}
              w="100%"
            >
              Dashboard
            </Button>
          </Link>
          <Link href="#">
            <Button
              leftIcon={<GoChecklist color="athensgray.50" />}
              size="md"
              color="gray.500"
              fontSize={12}
              justifyContent="start"
              variant="ghost"
              _hover={{
                background: "cerulean.DEFAULT",
                border: "none",
                color: "white",
              }}
              _focus={{
                background: "cerulean.DEFAULT",
                border: "none",
                color: "white",
              }}
              _active={{
                background: "cerulean.DEFAULT",
                border: "none",
                color: "white",
              }}
              w="100%"
            >
              Transaction
            </Button>
          </Link>
          <Link href="#">
            <Button
              leftIcon={<TbReportAnalytics color="athensgray.50" />}
              size="md"
              color="gray.500"
              fontSize={12}
              justifyContent="start"
              variant="ghost"
              _hover={{
                background: "cerulean.DEFAULT",
                border: "none",
                color: "white",
              }}
              _focus={{
                background: "cerulean.DEFAULT",
                border: "none",
                color: "white",
              }}
              _active={{
                background: "cerulean.DEFAULT",
                border: "none",
                color: "white",
              }}
              w="100%"
            >
              Report
            </Button>
          </Link>
          <Link href="#">
            <Button
              leftIcon={<VscSettings color="athensgray.50" />}
              size="md"
              fontSize={12}
              color="gray.500"
              justifyContent="start"
              variant="ghost"
              _hover={{
                background: "cerulean.DEFAULT",
                border: "none",
                color: "white",
              }}
              _focus={{
                background: "cerulean.DEFAULT",
                border: "none",
                color: "white",
              }}
              _active={{
                background: "cerulean.DEFAULT",
                border: "none",
                color: "white",
              }}
              w="100%"
            >
              Setting
            </Button>
          </Link>
        </Stack>

        <Link href="#">
          <Button
            leftIcon={<IoLogOutOutline />}
            size="md"
            fontSize={12}
            justifyContent="start"
            colorScheme="strikemaster"
            variant="solid"
            _hover={{
              background: "strikemaster.400",
              border: "none",
              color: "white",
            }}
            w="100%"
          >
            Logout
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Nav;
