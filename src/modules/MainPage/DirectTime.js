import React, { useState } from "react";
import styles from "./directionTime.module.css";

window.addEventListener("load", () => {
  var butContainer = document.getElementsByClassName("butContainer");
  if (typeof butContainer != typeof undefined && butContainer.length > 0) {
    var buttons = Array.from(butContainer[0].children);
    if (typeof buttons != typeof undefined && buttons.length > 0) {
      buttons.forEach((element) => {
        element.addEventListener("click", (event) => {
          var b = event.target;
          setCurrentTimeZone(buttons.indexOf(b));
        });
      });
    }
  }
  realtimeClock();
});
const timeZones = [
  "Europe/Minsk",
  "Asia/Tokyo",
  "Asia/Hong_Kong",
  "America/New_York",
  "America/Argentina/Buenos_Aires",
  "Europe/London",
];

var timeZone = timeZones[0];

function setCurrentTimeZone(timeZoneNumber) {
  timeZone = timeZones[timeZoneNumber];
}

function realtimeClock() {
  var rtClock = new Date().toLocaleTimeString("en-US", { timeZone: timeZone });
  // var hours = rtClock.getHours();
  // var minutes = rtClock.getMinutes();
  // var seconds = rtClock.getSeconds();

  // // adding AM and PM
  // var amPm = hours < 12 ? "AM" : "PM";
  // hours = hours < 12 ? hours : hours - 12; // convert hours into 12-hour format
  // // adding leading 0 before H/M/S
  // hours = ("0" + hours).slice(-2);
  // minutes = ("0" + minutes).slice(-2);
  // seconds = ("0" + seconds).slice(-2); //repeat ?

  // //display the Clock
  document.getElementById("clock").innerHTML = rtClock;
  var t = setTimeout(realtimeClock, 500);
}

const DirectTime = () => {
  // const [time, setTime] = useState(new Date().toLocaleTimeString());

  // setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

  return (
    <div className={styles.main}>
      <div id="mainClockCont">
        <div id="clock" className={styles.clock}></div>
        <div class="butContainer">
          <button>Minsk</button>
          <button>Tokio</button>
          <button>Beijing</button>
          <button>New York</button>
          <button>Buenos Aires</button>
          <button>London</button>
        </div>
      </div>
    </div>
  );
};

export default DirectTime;
