import React, { useState } from "react";
import styles from "./directionTime.module.css";
import { ReactComponent as Minsk } from "../../svg/minsk.svg";
import { ReactComponent as Tokyo } from "../../svg/tokyo.svg";

window.addEventListener("load", () => {
  const butContainer = document.getElementsByClassName("butContainer");
  if (typeof butContainer != typeof undefined && butContainer.length > 0) {
    const buttons = Array.from(butContainer[0].children);
    if (typeof buttons != typeof undefined && buttons.length > 0) {
      buttons.forEach((element) => {
        element.addEventListener("click", (event) => {
          let b = event.target;
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

const timeZonePic = [
  "../../svg/minsk.jpg",
  "../../svg/tokyo.jpg",
  "../../svg/benijing.jpg",
  "../../svg/new_york.jpg",
  "../../svg/buenos-aires.jpg",
  "../../svg/london.jpg",
];

let timeZone = timeZones[0];

function setCurrentTimeZone(timeZoneNumber) {
  timeZone = timeZones[timeZoneNumber];
}

function realtimeClock() {
  const rtClock = new Date().toLocaleTimeString("en-US", {
    timeZone: timeZone,
  });

  document.getElementById("clock").innerHTML = rtClock;
  setTimeout(realtimeClock, 500);
}

const DirectTime = () => {
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
        <div id="timeZonesPics"></div>
      </div>
    </div>
  );
};

export default DirectTime;
