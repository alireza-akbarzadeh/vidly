import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ img, title, rate, isHoverCard = true }) => {
  return (
    <div className={"cursor-pointer mt-6"}>
      <div className={"mx-1"}>
        <img
          className={"w-full h-full object-contain rounded-2xl"}
          src={`${process.env.REACT_APP_API_IMG}/${img}`}
          alt={title}
        />
      </div>
      {isHoverCard && (
        <>
          <h4 className={"text-gray-200 font-medium text-sm mt-2"}>{title}</h4>
          <div className={"flex items-center gap-2 mt-2"}>
            <FaStar color={"#FFD700"} />
            <span className={"text-yellow-600"}>{rate}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
