import React from "react";
import { Link } from "react-router-dom";
const Anchor = ({ label, ...rest }) => {
  return (
    <Link
      className='dark:text-gray-200 text-gray-600 opacity-80 hover:text-white dark:hover:text-black hover:opacity-100 transition-all ease-in-out duration-300'
      {...rest}
    >
      {label}
    </Link>
  );
};

export default Anchor;
