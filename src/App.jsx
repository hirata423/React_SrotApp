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

  const [leftIntervalKey, setleftIntervalKey] = useState(0);
  const [centerIntervalKey, setCenterIntervalKey] = useState(0);
  const [rightIntervalKey, setRightIntervalKey] = useState(0);

  const [allHandle, setAllHandle] = useState(true);

  const [leftHandle, setLeftHandle] = useState(false);
  const [centerHandle, setCenterHandle] = useState(false);
  const [rightHandle, setRightHandle] = useState(false);

  //スロットスタートボタン

  const allSrotStartButton = () => {
    if (allHandle) {
      leftSrotStart();
      setleftIntervalKey(setInterval(leftSrotStart, 200));
      document.getElementById("left").style.backgroundColor = "red";
      centerSrotStart();
      setCenterIntervalKey(setInterval(centerSrotStart, 175));
      document.getElementById("center").style.backgroundColor = "red";
      rightSrotStart();
      setRightIntervalKey(setInterval(rightSrotStart, 150));
      document.getElementById("right").style.backgroundColor = "red";

      setLeftHandle(true);
      setCenterHandle(true);
      setRightHandle(true);

      setAllHandle(false);
      console.log("スタートされました");
    } else if (leftHandle && centerHandle && rightHandle) {
      setAllHandle(true);
      // setLeftHandle(true);
      // setCenterHandle(true);
      // setRightHandle(true);

      console.log("リセットします");
    }
  };

  //左の処理【動】
  const leftSrotStart = () => {
    const rndLeftSrot = Math.floor(Math.random() * srotDisplay.length);
    setleftSrot(srotDisplay[rndLeftSrot]);
  };
  //左の処理【止】
  const leftSrotStopButton = () => {
    clearInterval(leftIntervalKey);
    document.getElementById("left").style.backgroundColor = "blue";
  };

  //真ん中の処理【動】
  const centerSrotStart = () => {
    const rndCenterSrot = Math.floor(Math.random() * srotDisplay.length);
    setCenterSrot(srotDisplay[rndCenterSrot]);
  };
  //真ん中の処理【止】
  const centerSrotStopButton = () => {
    clearInterval(centerIntervalKey);
    document.getElementById("center").style.backgroundColor = "blue";
  };

  //右の処理【動】
  const rightSrotStart = () => {
    const rndRightSrot = Math.floor(Math.random() * srotDisplay.length);
    setRightSrot(srotDisplay[rndRightSrot]);
  };
  //右の処理【止】
  const rightSrotStopButton = () => {
    clearInterval(rightIntervalKey);
    document.getElementById("right").style.backgroundColor = "blue";
  };

  return (
    <>
      <div className="mainTop">
        <h1 className="title">Srot Game</h1>
        <div className="allSrotBox">
          <div className="leftSrot">
            <img src={leftSrot} />
            <br />
            {/* <button className="left" onClick={leftSrotStopButton}>ストップ</button> */}
            <input
              id="left"
              type="button"
              onClick={leftSrotStopButton}
              value=""
            ></input>
          </div>
          <div className="centerSrot">
            <img src={centerSrot} />
            <br />
            {/* <button className="center" onClick={centerSrotStopButton}>ストップ</button> */}
            <input
              id="center"
              type="button"
              onClick={centerSrotStopButton}
              value=""
            ></input>
          </div>
          <div className="rightSrot">
            <img src={rightSrot} />
            <br />
            {/* <button className="right" onClick={rightSrotStopButton}>ストップ</button> */}
            <input
              id="right"
              type="button"
              onClick={rightSrotStopButton}
              value=""
            ></input>
          </div>
        </div>
        <div className="mainBack">
          {/* <button className="risetButton" onClick={allSrotStartButton}>スタート/ストップ</button> */}
          <input
            id="all"
            type="button"
            className="risetButton"
            onClick={allSrotStartButton}
          ></input>
        </div>
      </div>
    </>
  );
};
