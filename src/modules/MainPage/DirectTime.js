import React, { useState } from "react";
import styles from "./directionTime.module.css";

const DirectTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

  return (
    <div className={styles.main}>
      <div>{time}</div>
    </div>
  );
};

export default DirectTime;
