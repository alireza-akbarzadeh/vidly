import React from "react";
import PropsTypes from "prop-types";
const Input = ({
  helperText,
  label,
  placeholder = "Enter ...",
  status,
  name = "text",
  type = "text",
  ...rest
}) => {
  const classes =
    status === "success"
      ? `
  bg-green-50 
  border-green-500
  text-green-900 placeholder-green-700 
  dark:bg-green-100 dark:border-green-400
  focus:ring-green-500 focus:border-green-500 
  `
      : status === "error"
      ? `
   border-red-500 text-red-900 placeholder-red-700 bg-red-50
   focus:ring-red-500 focus:border-red-500 
   dark:bg-red-100 dark:border-red-400
    `
      : `bg-gray-50 border border-gray-300 text-gray-900
   focus:ring-blue-500
   focus:border-blue-500 
   dark:bg-gray-700 
   dark:border-gray-600
   dark:placeholder-gray-400
   dark:text-white
   dark:focus:ring-blue-500
   dark:focus:border-blue-500
   dark:shadow-sm-light`;

  const text =
    status === "error"
      ? ` text-red-600 dark:text-red-500`
      : status === "success"
      ? " text-green-700 dark:text-green-500"
      : "text-gray-900 dark:text-gray-300";

  return (
    <div className='my-4'>
      <label
        htmlFor={name}
        className={`block mb-2 text-sm font-medium capitalize ${text}`}
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        className={`
         ${classes}
         block
         transition-all
         ease-in-out
         duration-300
         outline-none
         w-full
         border
         text-sm 
         rounded-lg
         p-2.5
         `}
        {...rest}
      />
      <p className={`block my-2 text-sm font-medium capitalize ${text}`}>
        <span className='font-medium'>{helperText}</span>
      </p>
    </div>
  );
};

export default Input;
