import React from "react";
import { useIsFetching } from "react-query";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = () => {
  const isFetching = useIsFetching();
  const display = isFetching ? "inline" : "hidden";
  return isFetching ? (
    <div
      className={`fixed top-[50%] left-[50%] z-[999999] translate-x-[-50%] translate-y-[-50%] `}
    >
      <ScaleLoader color='rgb(60,179,113)' />
    </div>
  ) : (
    <div style={{ display: "none" }} />
  );
};

export default Loading;
