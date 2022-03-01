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
import { LeftComponent } from "./components/leftComponent";
import { CenterComponent } from "./components/centerComponent";
import { RightComponent } from "./components/rightComponent";
import { AllStart } from "./components/allComponent";
import { MoveLeftSrot } from "./moveComponent/leftComponent";
// import { LeftSrotStopButton } from "./stopComponent/leftComponent";

export const App = () => {
  const srotDisplay = [Bell, Budoo, Money, Piero, Seven, Suika, Apple];

  //スロット
  const [leftSrot, setleftSrot] = useState([White]);
  const [centerSrot, setCenterSrot] = useState([White]);
  const [rightSrot, setRightSrot] = useState([White]);
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
  const allSrotStartButton = () => {
    if (!allHandle) {
      leftSrotStart();
      setleftIntervalKey(setInterval(leftSrotStart, 200));
      setLeftButtonChange(true);
      centerSrotStart();
      setCenterIntervalKey(setInterval(centerSrotStart, 175));
      setCenterButtonChange(true);
      rightSrotStart();
      setRightIntervalKey(setInterval(rightSrotStart, 150));
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

  //左の処理【動】

  // const leftSrotStart = () => {
  <MoveLeftSrot
    display={srotDisplay}
    srot={setleftSrot}
    handle={setAllHandle}
  />;
  const rndLeftSrot = Math.floor(Math.random() * srotDisplay.length);
  setleftSrot(srotDisplay[rndLeftSrot]);
  setAllHandle(true);
  // };

  //左の処理【止】

  // <LeftSrotStopButton
  //   key={leftIntervalKey}
  //   change={setLeftButtonChange}
  //   handle={setAllHandle}
  // />;
  const leftSrotStopButton = () => {
    clearInterval(leftIntervalKey);
    setLeftButtonChange(false);
    setAllHandle(false);
  };

  //真ん中の処理【動】
  const centerSrotStart = () => {
    const rndCenterSrot = Math.floor(Math.random() * srotDisplay.length);
    setCenterSrot(srotDisplay[rndCenterSrot]);
    setAllHandle(true);
  };
  //真ん中の処理【止】
  const centerSrotStopButton = () => {
    clearInterval(centerIntervalKey);
    setCenterButtonChange(false);
    setAllHandle(false);
  };

  //右の処理【動】
  const rightSrotStart = () => {
    const rndRightSrot = Math.floor(Math.random() * srotDisplay.length);
    setRightSrot(srotDisplay[rndRightSrot]);
    setAllHandle(true);
  };
  //右の処理【止】
  const rightSrotStopButton = () => {
    clearInterval(rightIntervalKey);
    setRightButtonChange(false);
    setAllHandle(false);
  };

  return (
    <>
      <div className="mainTop">
        <h1 className="title">Srot Game</h1>
        <div className="allSrotBox">
          <LeftComponent
            image={leftSrot}
            handle={leftHandle}
            change={leftButtonChange}
            stop={leftSrotStopButton}
          />
          <CenterComponent
            image={centerSrot}
            handle={centerHandle}
            change={centerButtonChange}
            stop={centerSrotStopButton}
          />
          <RightComponent
            image={rightSrot}
            handle={rightHandle}
            change={rightButtonChange}
            stop={rightSrotStopButton}
          />
        </div>
        <div className="mainBack">
          <AllStart handle={allHandle} stop={allSrotStartButton} />
        </div>
      </div>
    </>
  );
};
