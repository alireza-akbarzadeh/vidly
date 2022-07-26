import React from "react";
import { useIsFetching } from "react-query";
import { RingLoader } from "react-spinners";

const Loading = () => {
  const isFetching = useIsFetching();
  const display = isFetching ? "inherit" : "none";
  return (
    <div style={{ display }}>
      <RingLoader style={{ color: "rgb(60,179,113)" }} />
    </div>
  );
};

export default Loading;
