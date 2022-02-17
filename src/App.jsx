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

  const [leftSrot, setleftSrot] = useState([White]);
  const [centerSrot, setCenterSrot] = useState([White]);
  const [rightSrot, setRightSrot] = useState([White]);

  let pushLeftSrotButtonKey;
  let pushCenterSrotButtonKey;
  let pushRightSrotButtonKey;

  //スロットスタートボタン
  const allSrotStartButton = () => {
    leftSrotStart();
    pushLeftSrotButtonKey = setInterval(leftSrotStart, 200);
    centerSrotStart();
    pushCenterSrotButtonKey = setInterval(centerSrotStart, 175);
    rightSrotStart();
    pushRightSrotButtonKey = setInterval(rightSrotStart, 150);
  };

  //左の処理【動】
  const leftSrotStart = () => {
    const rndLeftSrot = Math.floor(Math.random() * srotDisplay.length);
    setleftSrot(srotDisplay[rndLeftSrot]);
  };
  //左の処理【止】
  const leftSrotStopButton = () => {
    clearInterval(pushLeftSrotButtonKey);
    const nowLeftSrot = [leftSrot];
    setleftSrot(nowLeftSrot);
  };

  //真ん中の処理【動】
  const centerSrotStart = () => {
    const rndCenterSrot = Math.floor(Math.random() * srotDisplay.length);
    setCenterSrot(srotDisplay[rndCenterSrot]);
  };
  //真ん中の処理【止】
  const centerSrotStopButton = () => {
    clearInterval(pushCenterSrotButtonKey);
    const nowCenterSrot = [centerSrot];
    setCenterSrot(nowCenterSrot);
  };

  //右の処理【動】
  const rightSrotStart = () => {
    const rndRightSrot = Math.floor(Math.random() * srotDisplay.length);
    setRightSrot(srotDisplay[rndRightSrot]);
  };
  //右の処理【止】
  const rightSrotStopButton = () => {
    clearInterval(pushRightSrotButtonKey);
    const nowRightSrot = [rightSrot];
    setRightSrot(nowRightSrot);
  };

  return (
    <>
      <div className="mainTop">
        <h1 className="title">Srot Game</h1>
        <div className="allSrotBox">
          <div className="leftSrot">
            <img src={leftSrot} />
            <br />
            <button onClick={leftSrotStopButton}>ストップ</button>
          </div>
          <div className="centerSrot">
            <img src={centerSrot} />
            <br />
            <button onClick={centerSrotStopButton}>ストップ</button>
          </div>
          <div className="rightSrot">
            <img src={rightSrot} />
            <br />
            <button onClick={rightSrotStopButton}>ストップ</button>
          </div>
        </div>
        <div className="mainBack">
          <button className="risetButton" onClick={allSrotStartButton}>
            スタート/ストップ
          </button>
        </div>
      </div>
    </>
  );
};
