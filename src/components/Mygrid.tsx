import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
  SortingState,
  getSortedRowModel,
  PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";

interface DataTableProps {
  data: any[];
  columns: ColumnDef<any, any>[];
}

const Mygrid: React.FC<DataTableProps> = ({ data, columns }) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <>
      <Table>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                const meta: any = header.column.columnDef.meta;
                return (
                  <Th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    isNumeric={meta?.isNumeric}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    <chakra.span pl="4">
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === "desc" ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                const meta: any = cell.column.columnDef.meta;
                return (
                  <Td
                    key={cell.id}
                    fontWeight="normal"
                    fontSize={12}
                    isNumeric={meta?.isNumeric}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex alignItems="center" gap={2} justify="end" mt="10px">
        <Button
          border="none"
          rounded="100%"
          width={7}
          height={7}
          size="xs"
          colorScheme="athensgray"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <RiArrowLeftDoubleFill fontSize={15} />
        </Button>
        <Button
          border="none"
          rounded="100%"
          width={7}
          height={7}
          size="xs"
          colorScheme="athensgray"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon fontSize={15} />
        </Button>
        <Button
          border="none"
          rounded="100%"
          width={7}
          height={7}
          size="xs"
          colorScheme="athensgray"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon fontSize={15} />
        </Button>
        <Button
          border="none"
          rounded="100%"
          width={7}
          height={7}
          size="xs"
          colorScheme="athensgray"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <RiArrowRightDoubleFill fontSize={15} />
        </Button>
        <Text as="p" fontSize={12} fontWeight="normal">
          Page &nbsp;
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </Text>
      </Flex>
    </>
  );
};

export default Mygrid;
