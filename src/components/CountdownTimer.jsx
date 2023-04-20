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
  const [dataDaysTens, setDataDaysTens] = useState(2);
  const [dataDaysOne, setDataDaysOne] = useState(0);
  const [dataHoursTens, setDataHoursTens] = useState(0);
  const [dataHoursOne, setDataHoursOne] = useState(0);
  const [dataMinutesTens, setDataMinutesTens] = useState(0);
  const [dataMinutesOne, setDataMinutesOne] = useState(0);
  const [dataSecondsTens, setDataSecondsTens] = useState(0);
  const [dataSecondsOne, setDataSecondsOne] = useState(0);

  const [topHalf, setTopHalf] = useState(null);
  const [bottomHalf, setBottomHalf] = useState(null);
  const [topFlip, setTopFlip] = useState(null);
  const [bottomFlip, setBottomFlip] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataDaysTens(Math.floor(days / 10));
      setDataDaysOne(days % 10);

      setDataHoursTens(Math.floor(hours / 10));
      setDataHoursOne(hours % 10);

      setDataMinutesTens(Math.floor(minutes / 10));
      setDataMinutesOne(minutes % 10);

      setDataSecondsTens(Math.floor(seconds / 10));
      setDataSecondsOne(seconds % 10);

      setTopHalf(document.querySelector(".top"));
      setBottomHalf(document.querySelector(".bottom"));
      setTopFlip(document.createElement("div"));
      setBottomFlip(document.createElement("div").classList.add("bottom-flip"));
    }, 1000);

    return () => clearInterval(interval);
  }, [
    dataDaysTens,
    dataDaysOne,
    dataHoursTens,
    dataHoursOne,
    dataMinutesTens,
    dataMinutesOne,
    dataSecondsTens,
    dataSecondsOne,
  ]);

  useEffect(() => {}, []);

  return (
    <div className="show-counter w-full h-screen items-center justify-center flex gap-x-3">
      <div>
        <div className="text-sm">Days</div>
        <div className="segment">
          <DateTimeDisplay
            value={dataDaysTens}
            // isFlip="top-flip"
            isDanger={days <= 3}
          />
          <DateTimeDisplay
            // isFlip="bottom-flip"
            value={dataDaysOne}
            isDanger={days <= 3}
          />
        </div>
      </div>
      <div>
        <div className="text-sm">Hours</div>
        <div className="segment">
          <DateTimeDisplay value={dataHoursTens} isDanger={days <= 3} />
          <DateTimeDisplay value={dataHoursOne} isDanger={days <= 3} />
        </div>
      </div>
      <div>
        <div className="text-sm">Minutes</div>
        <div className="segment">
          <DateTimeDisplay value={dataMinutesTens} isDanger={days <= 3} />
          <DateTimeDisplay value={dataMinutesOne} isDanger={days <= 3} />
        </div>
      </div>
      <div>
        <div className="text-sm">Seconds</div>
        <div className="segment">
          <DateTimeDisplay value={dataSecondsTens} isDanger={days <= 3} />
          <DateTimeDisplay value={dataSecondsOne} isDanger={days <= 3} />
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
