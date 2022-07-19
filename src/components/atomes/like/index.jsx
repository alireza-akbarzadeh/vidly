import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
const Like = (props) => {
  const { onSelect } = props;
  const [isLike, setIsLike] = useState(false);
  const handleSelect = () => {
    setIsLike((prev) => !prev);
    onSelect(isLike);
  };
  return (
    <div className='cursor-pointer' onClick={() => handleSelect()}>
      {isLike ? <FcLike /> : <AiOutlineHeart />}
    </div>
  );
};
Like.propTypes = {
  onSelect: PropTypes.func,
};
export default Like;
