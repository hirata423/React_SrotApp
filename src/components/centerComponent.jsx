import React from "react";

export const CenterComponent = (props) => {
  const { image, handle, change, stop } = props;
  return (
    <div className="centerSrot">
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
