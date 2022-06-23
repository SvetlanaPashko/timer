import React, { useState } from "react";
import styles from "./directionTime.module.css";
import Minsk from "../../svg/minsk.jpg";
import Tokyo from "../../svg/tokyo.jpg";
import Benijing from "../../svg/beijing.jpg";
import NY from "../../svg/new_york.jpg";
import BA from "../../svg/buenos-aires.jpg";
import London from "../../svg/london.jpg";

window.addEventListener("load", () => {
  const butContainer = document.getElementsByClassName("butContainer");
  if (typeof butContainer != typeof undefined && butContainer.length > 0) {
    const buttons = Array.from(butContainer[0].children);
    if (typeof buttons != typeof undefined && buttons.length > 0) {
      buttons.forEach((element) => {
        element.addEventListener("click", (event) => {
          let b = event.target;
          setCurrentTimeZone(buttons.indexOf(b));
          setPic(buttons.indexOf(b));
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

const timeZonePic = [Minsk, Tokyo, Benijing, NY, BA, London];

let timeZone = timeZones[0];
let timePic = timeZonePic[0];

function setCurrentTimeZone(timeZoneNumber) {
  timeZone = timeZones[timeZoneNumber];
}

function setPic(timeZoneNumber) {
  timePic = timeZonePic[timeZoneNumber];
}

function realtimeClock() {
  const rtClock = new Date().toLocaleTimeString("en-US", {
    timeZone: timeZone,
  });

  document.getElementById("timeZonesPics").src = timePic;

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
        <img id="timeZonesPics" />
      </div>
    </div>
  );
};

export default DirectTime;
