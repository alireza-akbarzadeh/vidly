import React from "react";

const Table = ({ children }) => {
  return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
      <table
        className='w-full text-sm text-left
       text-gray-500 dark:text-gray-400'
      >
        {children}
      </table>
    </div>
  );
};

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
const Th = ({ col = "col", children, ...rest }) => {
  return (
    <th scope={col} className='py-3 px-6' {...rest}>
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

export { THead, Table, Tbody, Td, Th, Tr };

export default Table;
