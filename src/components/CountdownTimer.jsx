import React, { useEffect, useState } from "react";
import { useCountdown } from "../hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter w-full h-screen items-center justify-center flex gap-x-3">
      <div>
        <div className="text-sm">Days</div>
        <div className="segment">
          <DateTimeDisplay value={Math.floor(days / 10)} />
          <DateTimeDisplay value={days % 10} />
        </div>
      </div>
      <div>
        <div className="text-sm">Hours</div>
        <div className="segment">
          <DateTimeDisplay value={Math.floor(hours / 10)} />
          <DateTimeDisplay value={hours % 10} />
        </div>
      </div>
      <div>
        <div className="text-sm">Minutes</div>
        <div className="segment">
          <DateTimeDisplay value={Math.floor(minutes / 10)} />
          <DateTimeDisplay value={minutes % 10} />
        </div>
      </div>
      <div>
        <div className="text-sm">Seconds</div>
        <div className="segment">
          <DateTimeDisplay value={Math.floor(seconds / 10)} className />
          <DateTimeDisplay value={seconds % 10} />
        </div>
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
