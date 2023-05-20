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
  return (
    <div className="showCounter">
      <div className="countdown">
        <div className="countdown-grid">
          <DateTimeDisplay
            id={"days"}
            dateTime={{ days, hours, minutes, seconds }}
          />
          <div className="mb-1 text-black dark:text-white text-8xl lg:text-9xl">
            :
          </div>
          <DateTimeDisplay
            id={"hours"}
            title={"Hours"}
            dateTime={{ days, hours, minutes, seconds }}
          />
        </div>
        <div className="hidden mb-1 text-black dark:text-white text-8xl lg:text-9xl md:block">
          :
        </div>
        <div className="countdown-grid">
          <DateTimeDisplay
            id={"minutes"}
            dateTime={{ days, hours, minutes, seconds }}
          />
          <div className="mb-1 text-black dark:text-white text-8xl lg:text-9xl">
            :
          </div>
          <DateTimeDisplay
            id={"seconds"}
            dateTime={{ days, hours, minutes, seconds }}
          />
        </div>
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
