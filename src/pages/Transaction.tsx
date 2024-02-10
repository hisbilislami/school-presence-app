import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import Mygrid from "../components/Mygrid";
import { createColumnHelper } from "@tanstack/react-table";

const Transaction: React.FC = () => {
  const data: {
    name: string;
    company: string;
    representative: any;
    country: any;
  }[] = [
    {
      name: "hisbil islami",
      company: "pt. abc",
      representative: { name: "hisbil aja lah" },
      country: { name: "indonesia" },
    },
    {
      name: "lutfilla indryana",
      company: "pt. abcd",
      representative: { name: "filla aja lah" },
      country: { name: "indonesia" },
    },
    {
      name: "Rohani",
      company: "pt. abcs",
      representative: { name: "Rohani aja lah" },
      country: { name: "indonesia" },
    },
    {
      name: "Iqbal",
      company: "pt. abc",
      representative: { name: "iqbal aja lah" },
      country: { name: "indonesia" },
    },
    {
      name: "Ridwan",
      company: "pt. abcd",
      representative: { name: "ridwan aja lah" },
      country: { name: "indonesia" },
    },
  ];

  const columnHelper = createColumnHelper<{
    name: string;
    company: string;
    representative: any;
    country: any;
  }>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: "Name",
    }),
    columnHelper.accessor("country.name", {
      cell: (info) => info.getValue(),
      header: "Country",
    }),
    columnHelper.accessor("company", {
      cell: (info) => info.getValue(),
      header: "Company",
    }),
    columnHelper.accessor("representative.name", {
      cell: (info) => info.getValue(),
      header: "Representative",
    }),
  ];

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
            Transaction
          </Heading>
          <Text
            size="xs"
            fontWeight="normal"
            fontSize="10px"
            color="frenchgray.600"
          >
            List Transaction
          </Text>
        </Stack>
        <VStack mt="10px">
          <Box w="100%" bg="frenchgray.50" p="20px" borderRadius="10px">
            <Mygrid columns={columns} data={data}></Mygrid>
          </Box>
        </VStack>
      </Box>
    </div>
  );
};

export default Transaction;
