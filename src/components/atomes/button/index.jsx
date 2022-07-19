import React from "react";

const Button = ({ label, ...rest }) => {
  return (
    <button
      className='
 text-white
 bg-red-700
 hover:bg-red-800 
 focus:ring-red-300 
 dark:hover:bg-red-700
 dark:focus:ring-red-900
 dark:bg-red-600
 focus:outline-none
 focus:ring-4 
 font-medium
 rounded-full text-sm px-5 py-2 
 text-center mr-2 mb-1'
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
