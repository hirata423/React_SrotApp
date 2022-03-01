import React, { useState } from "react";
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
  const slotDisplay = [Bell, Budoo, Money, Piero, Seven, Suika, Apple];

  //スロット
  const [leftSlot, setleftSlot] = useState([White]);
  const [centerSlot, setCenterSlot] = useState([White]);
  const [rightSlot, setRightSlot] = useState([White]);
  //タイマー
  const [leftIntervalKey, setleftIntervalKey] = useState(0);
  const [centerIntervalKey, setCenterIntervalKey] = useState(0);
  const [rightIntervalKey, setRightIntervalKey] = useState(0);
  //ボタンの色
  const [leftButtonChange, setLeftButtonChange] = useState(true);
  const [centerButtonChange, setCenterButtonChange] = useState(true);
  const [rightButtonChange, setRightButtonChange] = useState(true);
  //disabled
  const [allHandle, setAllHandle] = useState(false);
  const [leftHandle, setLeftHandle] = useState(true);
  const [centerHandle, setCenterHandle] = useState(true);
  const [rightHandle, setRightHandle] = useState(true);

  //スロットスタートボタン
  const allSlotStartButton = () => {
    if (!allHandle) {
      moveSlot(setleftSlot);
      setleftIntervalKey(setInterval(() => moveSlot(setleftSlot), 200));
      setLeftButtonChange(true);

      moveSlot(setCenterSlot);
      setCenterIntervalKey(setInterval(() => moveSlot(setCenterSlot), 175));
      setCenterButtonChange(true);

      moveSlot(setRightSlot);
      setRightIntervalKey(setInterval(() => moveSlot(setRightSlot), 150));
      setRightButtonChange(true);

      setLeftHandle(false);
      setCenterHandle(false);
      setRightHandle(false);
      setAllHandle(false);
    }
    if (!leftHandle && !centerHandle && !rightHandle) {
      setAllHandle(false);
    }
  };

  //スロットが動き出す処理　　"./memo.befor"に前の記述あり
  const moveSlot = (func) => {
    const rndSlotDisplay = Math.floor(Math.random() * slotDisplay.length);
    func(slotDisplay[rndSlotDisplay]);
    setAllHandle(true);
  };

  //スロットの停止
  const stopSlot = (state, func) => {
    clearInterval(state);
    func(false);
    setAllHandle(false);
  };

  //左・中・右
  const leftSlotStopButton = () => {
    stopSlot(leftIntervalKey, setLeftButtonChange);
  };

  const centerSlotStopButton = () => {
    stopSlot(centerIntervalKey, setCenterButtonChange);
  };

  const rightSlotStopButton = () => {
    stopSlot(rightIntervalKey, setRightButtonChange);
  };

  return (
    <>
      <div className="mainTop">
        <h1 className="title">Slot Game</h1>
        <div className="allSlotBox">
          <SlotComponent
            image={leftSlot}
            handle={leftHandle}
            change={leftButtonChange}
            stop={leftSlotStopButton}
            name={leftSlot}
          />
          <SlotComponent
            image={centerSlot}
            handle={centerHandle}
            change={centerButtonChange}
            stop={centerSlotStopButton}
            name={centerSlot}
          />
          <SlotComponent
            image={rightSlot}
            handle={rightHandle}
            change={rightButtonChange}
            stop={rightSlotStopButton}
            name={rightSlot}
          />
        </div>
        <div className="mainBack">
          <AllStart handle={allHandle} stop={allSlotStartButton} />
        </div>
      </div>
    </>
  );
};
