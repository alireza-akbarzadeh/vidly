import React from "react";
import PropTypes from "prop-types";
const List = ({
  items = [],
  selected,
  handelSelectList,
  valueProps = "_id",
  textProps = "name",
}) => {
  return (
    <div className='text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => handelSelectList(item)}
          type='button'
          className={`${
            selected === item[textProps]
              ? " bg-blue-700  text-white border-gray-200 dark:bg-gray-800 dark:border-gray-600"
              : ""
          }  py-2 px-4 w-full font-medium text-left 
          border-b border-gray-200
           cursor-pointer hover:bg-gray-100
           hover:text-blue-700 
          focus:outline-none 
          dark:border-gray-600
           dark:hover:bg-gray-600 dark:hover:text-white
        `}
        >
          {item[textProps]}
        </button>
      ))}
    </div>
  );
};

export default List;

List.propTypes = {
  items: PropTypes.array.isRequired,
  selected: PropTypes.string,
  valueProps: PropTypes.string,
  textProps: PropTypes.string,
  handelSelectList: PropTypes.func,
};
