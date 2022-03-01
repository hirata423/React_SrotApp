import React from "react";

export const SlotComponent = (props) => {
  const { image, handle, change, stop, name } = props;
  return (
    <div className="leftSlot">
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
