import React, { useEffect } from "react";
import { useCountdown } from "../hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  // const [dataDaysTens, setDataDaysTens] = useState(0);
  // const [dataDaysOne, setDataDaysOne] = useState(0);
  // const [dataHoursTens, setDataHoursTens] = useState(0);
  // const [dataHoursOne, setDataHoursOne] = useState(0);
  // const [dataMinutesTens, setDataMinutesTens] = useState(0);
  // const [dataMinutesOne, setDataMinutesOne] = useState(0);
  // const [dataSecondsTens, setDataSecondsTens] = useState(0);
  // const [dataSecondsOne, setDataSecondsOne] = useState(0);

  const flip = (flipCard, newNumber) => {
    const topHalf = flipCard.querySelector(".top");
    const startNumber = parseInt(topHalf.textContent);
    if (newNumber === startNumber) return;

    const bottomHalf = flipCard.querySelector(".bottom");
    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");

    topHalf.textContent = startNumber;
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener("animationstart", (e) => {
      topHalf.textContent = newNumber;
    });
    topFlip.addEventListener("animationend", (e) => {
      topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", (e) => {
      bottomHalf.textContent = newNumber;
      bottomFlip.remove();
    });
    flipCard.append(topFlip, bottomFlip);
  };

  useEffect(() => {
    flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10));
    flip(document.querySelector("[data-days-ones]"), days % 10);
    flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
    flip(document.querySelector("[data-hours-ones]"), hours % 10);
    flip(
      document.querySelector("[data-minutes-tens]"),
      Math.floor(minutes / 10)
    );
    flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
    flip(
      document.querySelector("[data-seconds-tens]"),
      Math.floor(seconds / 10)
    );
    flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
  });

  return (
    <div className="show-counter w-full h-screen items-center justify-center flex gap-x-3">
      <div className="container-segment">
        <div className="segment-title">Days</div>
        <div className="segment">
          <div className="flip-card" data-days-tens>
            <div className="top">2</div>
            <div className="bottom">2</div>
          </div>
          <div className="flip-card" data-days-ones>
            <div className="top">4</div>
            <div className="bottom">4</div>
          </div>
        </div>
      </div>
      <div className="container-segment">
        <div className="segment-title">Hours</div>
        <div className="segment">
          <div className="flip-card" data-hours-tens>
            <div className="top">2</div>
            <div className="bottom">2</div>
          </div>
          <div className="flip-card" data-hours-ones>
            <div className="top">4</div>
            <div className="bottom">4</div>
          </div>
        </div>
      </div>
      <div className="container-segment">
        <div className="segment-title">Minutes</div>
        <div className="segment">
          <div className="flip-card" data-minutes-tens>
            <div className="top">0</div>
            <div className="bottom">0</div>
          </div>
          <div className="flip-card" data-minutes-ones>
            <div className="top">0</div>
            <div className="bottom">0</div>
          </div>
        </div>
      </div>
      <div className="container-segment">
        <div className="segment-title">Seconds</div>
        <div className="segment">
          <div className="flip-card" data-seconds-tens>
            <div className="top">0</div>
            <div className="bottom">0</div>
          </div>
          <div className="flip-card" data-seconds-ones>
            <div className="top">0</div>
            <div className="bottom">0</div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="text-sm">Days</div>
        <div className="segment">
          <DateTimeDisplay value={dataDaysTens} />
          <DateTimeDisplay value={dataDaysOne} />
        </div>
      </div>
      <div>
        <div className="text-sm">Hours</div>
        <div className="segment">
          <DateTimeDisplay value={dataHoursTens} />
          <DateTimeDisplay value={dataHoursOne} />
        </div>
      </div>
      <div>
        <div className="text-sm">Minutes</div>
        <div className="segment">
          <DateTimeDisplay value={dataMinutesTens} />
          <DateTimeDisplay value={dataMinutesOne} />
        </div>
      </div> */}
      {/* <div>
        <div className="text-sm">Seconds</div>
        <div className="segment">
          <DateTimeDisplay value={dataSecondsTens} />
          <DateTimeDisplay value={dataSecondsOne} />
        </div>
      </div> */}
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
