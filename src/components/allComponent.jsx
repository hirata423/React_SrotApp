import React from "react";

export const AllStart = (props) => {
  const { handle, stop } = props;

  return (
    <>
      <button disabled={handle} onClick={stop}>
        スタート
      </button>
    </>
  );
};
