import { useState } from "react";
import "./style.css";
import White from "./images/white.jpg";
import Bell from "./images/bell.jpg";
import Budoo from "./images/budoo.jpg";
import Money from "./images/money.jpg";
import Piero from "./images/piero.jpg";
import Seven from "./images/seven.jpg";
import Suika from "./images/suika.jpg";
import Apple from "./images/apple.jpg";
import { SlotComponent } from "./components/slotComponent";
import { AllStart } from "./components/allComponent";

export const App = () => {
  // const slotDisplay = [Bell];
  const slotDisplay = [Bell, Budoo, Money, Piero, Seven, Suika, Apple];
  //スロット
  const [leftSlot, setleftSlot] = useState([White]);
  // const [centerSlot, setCenterSlot] = useState([White]);
  const [rightSlot, setRightSlot] = useState([White]);

  const [slot, setSlot] = useState({
    left: White,
    center: White,
    right: White,
  });

  //タイマー
  const [leftIntervalKey, setleftIntervalKey] = useState(0);
  const [centerIntervalKey, setCenterIntervalKey] = useState(0);
  const [rightIntervalKey, setRightIntervalKey] = useState(0);
  //ボタンの色
  const [leftBtnChange, setLeftBtnChange] = useState(true);
  const [centerBtnChange, setCenterBtnChange] = useState(true);
  const [rightBtnChange, setRightBtnChange] = useState(true);
  //disabled
  const [allHandle, setAllHandle] = useState(false);
  const [leftHandle, setLeftHandle] = useState(true);
  const [centerHandle, setCenterHandle] = useState(true);
  const [rightHandle, setRightHandle] = useState(true);

  //スロットスタートボタン
  const allSlotStartBtn = () => {
    if (!allHandle) {
      moveSlot(setleftSlot);
      setleftIntervalKey(setInterval(() => moveSlot(setleftSlot), 200));
      setLeftBtnChange(true);

      moveSlot(setSlot);
      setCenterIntervalKey(setInterval(() => moveSlot(setSlot), 175));
      setCenterBtnChange(true);

      moveSlot(setRightSlot);
      setRightIntervalKey(setInterval(() => moveSlot(setRightSlot), 150));
      setRightBtnChange(true);

      setLeftHandle(false);
      setCenterHandle(false);
      setRightHandle(false);
      setAllHandle(false);

      // if ((leftSlot === centerSlot) === rightSlot) {
      //   alert("Good");
      // }
    }
    if (!leftHandle && !centerHandle && !rightHandle) {
      setAllHandle(false);
    }
  };

  //スロットが動き出す処理　　"./memo.befor"に前の記述あり
  const moveSlot = (func, center) => {
    const rndSlotDisplay = Math.floor(Math.random() * slotDisplay.length);
    func({ slot, center: slotDisplay[rndSlotDisplay] });
    // func((slot, { center: slotDisplay[rndSlotDisplay] }));
    // func(slotDisplay[rndSlotDisplay]);
    setAllHandle(true);
  };

  //スロットの停止
  const stopSlot = (state, func) => {
    clearInterval(state);
    func(false);
    setAllHandle(false);
  };

  //左・中・右
  const leftSlotStopBtn = () => {
    stopSlot(leftIntervalKey, setLeftBtnChange);
  };

  const centerSlotStopBtn = () => {
    stopSlot(centerIntervalKey, setCenterBtnChange);
  };

  const rightSlotStopBtn = () => {
    stopSlot(rightIntervalKey, setRightBtnChange);
  };

  return (
    <div className="mainTop">
      <h1 className="title">Slot Game</h1>
      <div className="allSlotBox">
        <SlotComponent
          image={leftSlot}
          handle={leftHandle}
          change={leftBtnChange}
          stop={leftSlotStopBtn}
          name={leftSlot}
        />
        <SlotComponent
          // image={centerSlot}
          image={slot.center}
          handle={centerHandle}
          change={centerBtnChange}
          stop={centerSlotStopBtn}
          // name={centerSlot}
          name={slot.center}
        />
        <SlotComponent
          image={rightSlot}
          handle={rightHandle}
          change={rightBtnChange}
          stop={rightSlotStopBtn}
          name={rightSlot}
        />
      </div>
      <div className="mainBack">
        <AllStart handle={allHandle} stop={allSlotStartBtn} />
      </div>
    </div>
  );
};
