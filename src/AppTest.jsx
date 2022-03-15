import { useState, useEffect } from "react";
import White from "./images/white.jpg";
import Bell from "./images/bell.jpg";

export const AppTest = () => {
  const [slot, setSlot] = useState({
    left: White,
    center: Bell,
    right: White,
  });

  const turn = () => {
    setSlot((slot) => ({ ...slot, center: White }));
    console.log(slot);
  };

  return (
    <>
      <button onClick={turn} />
      <img src={slot.center} alt="" />
    </>
  );
};
