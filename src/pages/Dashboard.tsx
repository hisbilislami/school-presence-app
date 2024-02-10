import {
  Box,
  Heading,
  Stack,
  Stat,
  StatArrow,
  StatDownArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <div style={{ width: "100%" }}>
      <Box w="100%">
        {/* header */}
        <Stack
          spacing="1px"
          h="50px"
          align="start"
          w="100%"
          borderBottom="0.5px solid"
          borderColor="frenchgray.200"
        >
          <Heading as="h2" size="md">
            Overview
          </Heading>
          <Text
            size="xs"
            fontWeight="normal"
            fontSize="10px"
            color="frenchgray.600"
          >
            Overview Desc
          </Text>
        </Stack>
        {/* body */}
        <VStack mt="10px">
          <Box w="100%" bg="frenchgray.50" p="20px" borderRadius="10px">
            <StatGroup>
              <Stat bg="matisse.300" p="20px" mr="10px" borderRadius="5px">
                <StatLabel>Sent</StatLabel>
                <StatNumber>345,670</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
              </Stat>
              <Stat bg="pinkflare.300" p="20px" ml="10px" borderRadius="5px">
                <StatLabel>Clicked</StatLabel>
                <StatNumber>45</StatNumber>
                <StatHelpText>
                  <StatDownArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Stat>
            </StatGroup>
          </Box>
        </VStack>
      </Box>
    </div>
  );
};

export default Dashboard;
