import React from "react";

const Select = ({ label, name, option, placeholder, ...rest }) => {
  return (
    <>
      <label
        htmlFor="genre"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {label}
      </label>
      <select
        {...rest}
        id={name}
        className="bg-gray-50 border border-gray-300
         text-gray-900 text-sm rounded-lg
          focus:ring-blue-500
           focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {option.map((genre, index) => (
          <option
            className="cursor-pointer"
            key={genre._id + index}
            value={genre.name}
          >
            {genre.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
