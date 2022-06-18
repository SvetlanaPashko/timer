import { Button } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./directionTime.module.css";
import { InputNumber } from "antd";
import {
  seconds as toSeconds,
  minutes as toMinutes,
  hours as toHours,
} from "../../utils/time";

const useCustomTime = (defaultTime, resetTime, isTimer = false) => {
  const [time, setTime] = useState(defaultTime);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (defaultTime !== time) {
      setTime(defaultTime);
    }
  }, [defaultTime]);

  const incrimentTimer = () => {
    if (isTimer) {
      setTime((prevTime) => {
        if (prevTime - 1000 < 0) {
          return prevTime;
        }
        return prevTime - 1000;
      });
    } else {
      setTime((prevTime) => prevTime + 1000);
    }
  };
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(incrimentTimer, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return {
    running,
    Time: () => {
      return (
        <div className={styles.title}>
          <span>{("0" + Math.floor(time / 3600000)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div>
      );
    },
    Buttons: () => {
      return (
        <div className={styles.buttons}>
          {((!running && time === 0) || (isTimer && !running)) && (
            <Button type="primary" onClick={() => setRunning(true)}>
              Start
            </Button>
          )}
          {running && (
            <Button type="primary" onClick={() => setRunning(false)}>
              Stop
            </Button>
          )}
          {!running && time !== 0 && (
            <Button
              type="link"
              onClick={() => {
                setTime(0);
                resetTime?.();
              }}
            >
              Reset
            </Button>
          )}
        </div>
      );
    },
  };
};

const Stopwatch = () => {
  const { Time, Buttons } = useCustomTime(0);

  return (
    <div className={styles.main}>
      <Time></Time>
      <Buttons></Buttons>
    </div>
  );
};

export const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const resetTime = useCallback(() => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }, []);

  const { Time, Buttons, running } = useCustomTime(
    toHours(hours) + toMinutes(minutes) + toSeconds(seconds),
    resetTime,
    true
  );
  return (
    <div className={styles.main}>
      {!running && (
        <div className={styles.selectTime}>
          <InputNumber min={0} max={23} value={hours} onChange={setHours} />
          <div className={styles.doublePoint}>:</div>
          <InputNumber min={0} max={59} value={minutes} onChange={setMinutes} />
          <div className={styles.doublePoint}>:</div>

          <InputNumber min={0} max={59} value={seconds} onChange={setSeconds} />
        </div>
      )}
      {running && <Time></Time>}
      <Buttons></Buttons>
    </div>
  );
};

export default Stopwatch;
