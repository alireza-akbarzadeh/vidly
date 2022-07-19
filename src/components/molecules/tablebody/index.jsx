import React from "react";
import { Tbody, Td, Tr } from "../table";
import _ from "lodash";
const TableBody = (props) => {
  const { data, columns } = props;
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
  return (
    <Tbody>
      {data?.map((item, index) => (
        <Tr key={index} isHover>
          {columns.map((column, index) => (
            <Td
              key={index}
              scope='row'
              className='py-4 px-6 
              font-medium text-gray-900 
              whitespace-nowrap dark:text-white'
            >
              {renderCell(item, column)}
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
};

export default TableBody;
