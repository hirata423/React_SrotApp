import React from "react";

export const MoveLeftSrot = (props) => {
  const { display, srot, handle } = props;

  const rndLeftSrot = Math.floor(Math.random() * display.length);
  srot(display[rndLeftSrot]);
  handle(true);

  return <></>;
};
