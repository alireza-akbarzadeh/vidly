import React from "react";

const Button = ({ label, variant, fullWidth, icon, ...rest }) => {
  const classes =
    variant === "danger"
      ? `bg-red-700
      hover:bg-red-800 
     focus:ring-red-300 
     dark:hover:bg-red-700
     dark:focus:ring-red-900
     dark:bg-red-600`
      : `
      bg-gradient-to-br
      from-purple-600 to-blue-500 
      hover:bg-gradient-to-bl
      focus:outline-none focus:ring-blue-300
      dark:focus:ring-blue-800 
      `;

  return (
    <button
      className={`${classes}${fullWidth && "w-full"}
    text-white
    focus:outline-none
    transition-colors
    ease-in-out
    duration-500
    focus:ring-4 
    font-medium
    rounded-full
    text-sm px-5
    py-2 
    text-center  
     my-2`}
      {...rest}
    >
      {label}
      {icon}
    </button>
  );
};

export default Button;
