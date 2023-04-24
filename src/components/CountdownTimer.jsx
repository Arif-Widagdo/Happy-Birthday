import React from "react";
import { useCountdown } from "../hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";
import { useTheme } from "../providers/ThemeContext";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ targetDate, days, hours, minutes, seconds }) => {
  const darkTheme = useTheme();

  console.log(days + hours + minutes + seconds);
  return (
    <div className="showCounter">
      <div
        className={`text-sm font-bold ${
          days <= 0 && hours <= 3 ? "animate-bounce" : null
        } `}
      >
        Countdown to July 13, 2023
      </div>
      <div className="countdown">
        <DateTimeDisplay
          id={"days"}
          title={"Days"}
          dateTime={{ days, hours, minutes, seconds }}
        />
        <div className="text-white">:</div>
        <DateTimeDisplay
          id={"hours"}
          title={"Hours"}
          dateTime={{ days, hours, minutes, seconds }}
        />
        <div className="text-white">:</div>
        <DateTimeDisplay
          id={"minutes"}
          title={"Minutes"}
          dateTime={{ days, hours, minutes, seconds }}
        />
        <div className="text-white">:</div>
        <DateTimeDisplay
          id={"seconds"}
          title={"Seconds"}
          dateTime={{ days, hours, minutes, seconds }}
        />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [complete, days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        targetDate={targetDate}
        complete={complete}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
