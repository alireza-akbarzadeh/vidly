import React from "react";
import { TableBody, TableHead } from "..";

const THead = ({ children, ...rest }) => {
  return (
    <thead
      className='text-xs text-gray-700 uppercase
     bg-gray-50 dark:bg-gray-700 dark:text-gray-400'
      {...rest}
    >
      {children}
    </thead>
  );
};
const Th = ({ col = "col", children, className = "", ...rest }) => {
  return (
    <th scope={col} className={`py-3 px-6 ${className}`} {...rest}>
      {children}
    </th>
  );
};
const Tbody = ({ children, ...rest }) => {
  return <tbody {...rest}>{children}</tbody>;
};
const Tr = ({ children, isHover, ...rest }) => {
  return (
    <tr
      className={
        isHover &&
        "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      }
      {...rest}
    >
      {children}
    </tr>
  );
};
const Td = ({ children, ...rest }) => {
  return (
    <td className='py-4 px-6' {...rest}>
      {children}
    </td>
  );
};

const Table = (props) => {
  const { columns, data, setSort, sort } = props;
  return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
      <table
        className='w-full text-sm text-left
       text-gray-500 dark:text-gray-400'
      >
        <TableHead columns={columns} setSort={setSort} sort={sort} />
        <TableBody columns={columns} data={data} />
      </table>
    </div>
  );
};
export default Table;

export { THead, Table, Tbody, Td, Th, Tr };
