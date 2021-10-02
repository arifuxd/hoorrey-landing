import React from "react";
import "./App.css";
import logo from "./media/logo.png";

import Countdown from "react-countdown";
import Illustration from "./media/animated-svg.gif"


export default function App() {

  return (
    <div className="landing-page">
      <div className="container-wrapper">
        <div className="top-bar">
          <img src={logo} alt="logo" />
          <p>
            We are launching the alpha release of Hoorrey - The Next Gen Social
            Network very soon.
          </p>
          <p style={{ fontWeight: 500 }}>Projected Time is:</p>
          <Countdown date={Date.now() + 1300000000} renderer={renderer} />
        </div>
        <div  className="i-container">
        <img className="illustration" src={Illustration} alt="" />
        </div>
      </div>
      <footer>
        © Copyright{"  "}
        <span>
          <img src={logo} alt="logo" style={{ height: 24 }} />
        </span>
        {"  "}
        All Rights Reserved
      </footer>
    </div>
  );
}

const renderer = ({ days, hours, minutes, seconds }) => {
  console.log(days);
  return (
    <div className="countdown">
      <div className="col-1">
        <div className="days">{days < 10 ? "0" + days : days}</div>
        <h3>Days</h3>
      </div>
      <div className="colon">:</div>
      <div className="col-2">
        <div className="hours">{hours < 10 ? "0" + hours : hours}</div>
        <h3>Hours</h3>
      </div>
      <div className="colon">:</div>
      <div className="col-3">
        <div className="minutes">{minutes < 10 ? "0" + minutes : minutes}</div>
        <h3>Mins</h3>
      </div>
      <div className="colon">:</div>
      <div className="col-4">
        <div className="seconds">{seconds < 10 ? "0" + seconds : seconds}</div>
        <h3>secs</h3>
      </div>
    </div>
  );
};
