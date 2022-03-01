import React from "react";

export const leftSrotStopButton = (props) => {
  const { key, change, handle } = props;

  clearInterval(key);
  change(false);
  handle(false);
  return <></>;
};
