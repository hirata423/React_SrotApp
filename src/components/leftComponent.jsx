import React from "react";

export const LeftComponent = (props) => {
  const { image, handle, change, stop } = props;
  return (
    <div className="leftSrot">
      <img src={image} alt="" />
      <br />
      <button
        disabled={handle}
        style={
          change ? { backgroundColor: "red" } : { backgroundColor: "blue" }
        }
        onClick={stop}
      ></button>
    </div>
  );
};
