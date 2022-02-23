import React, { useEffect, useState } from "react";
import "./style.css";
import White from "./images/white.jpg";
import Bell from "./images/bell.jpg";
import Budoo from "./images/budoo.jpg";
import Money from "./images/money.jpg";
import Piero from "./images/piero.jpg";
import Seven from "./images/seven.jpg";
import Suika from "./images/suika.jpg";
import Apple from "./images/apple.jpg";

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

      setAllHandle(true);
    }
    if (!leftHandle && !centerHandle && !rightHandle) {
      setAllHandle(false);
    }
  };

  //左の処理【動】
  const leftSrotStart = () => {
    const rndLeftSrot = Math.floor(Math.random() * srotDisplay.length);
    setleftSrot(srotDisplay[rndLeftSrot]);
    setAllHandle(true);
  };
  //左の処理【止】
  const leftSrotStopButton = () => {
    clearInterval(leftIntervalKey);
    setLeftButtonChange(false);
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
  };

  //右の処理【動】
  const rightSrotStart = () => {
    const rndRightSrot = Math.floor(Math.random() * srotDisplay.length);
    setRightSrot(srotDisplay[rndRightSrot]);
    setAllHandle(true);
  };
  //右の処理【止】
  const rightSrotStopButton = () => {
    if (!rightHandle) {
      clearInterval(rightIntervalKey);
      setRightButtonChange(false);
      setAllHandle(false);
    }
  };

  return (
    <>
      <div className="mainTop">
        <h1 className="title">Srot Game</h1>
        <div className="allSrotBox">
          <div className="leftSrot">
            <img src={leftSrot} />
            <br />
            <button
              disabled={leftHandle}
              className="left"
              style={
                leftButtonChange
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "blue" }
              }
              onClick={leftSrotStopButton}
            ></button>
          </div>
          <div className="centerSrot">
            <img src={centerSrot} />
            <br />
            <button
              disabled={centerHandle}
              className="center"
              style={
                centerButtonChange
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "blue" }
              }
              onClick={centerSrotStopButton}
            ></button>
          </div>
          <div className="rightSrot">
            <img src={rightSrot} />
            <br />
            <button
              disabled={rightHandle}
              className="right"
              style={
                rightButtonChange
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "blue" }
              }
              onClick={rightSrotStopButton}
            ></button>
          </div>
        </div>
        <div className="mainBack">
          <button
            disabled={allHandle}
            className="risetButton"
            onClick={allSrotStartButton}
          >
            スタート/ストップ
          </button>
        </div>
      </div>
    </>
  );
};
