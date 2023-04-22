import React, { useEffect } from "react";
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
  // function getTimeSegmentElements(segmentElement) {
  //   const segmentDisplay = segmentElement.querySelector(".segment-display");
  //   const segmentDisplayTop = segmentDisplay.querySelector(
  //     ".segment-display__top"
  //   );
  //   const segmentDisplayBottom = segmentDisplay.querySelector(
  //     ".segment-display__bottom"
  //   );

  //   const segmentOverlay = segmentDisplay.querySelector(".segment-overlay");
  //   const segmentOverlayTop = segmentOverlay.querySelector(
  //     ".segment-overlay__top"
  //   );
  //   const segmentOverlayBottom = segmentOverlay.querySelector(
  //     ".segment-overlay__bottom"
  //   );

  //   return {
  //     segmentDisplayTop,
  //     segmentDisplayBottom,
  //     segmentOverlay,
  //     segmentOverlayTop,
  //     segmentOverlayBottom,
  //   };
  // }

  // function updateSegmentValues(displayElement, overlayElement, value) {
  //   displayElement.textContent = value;
  //   overlayElement.textContent = value;
  // }

  // function updateTimeSegment(segmentElement, timeValue) {
  //   const segmentElements = getTimeSegmentElements(segmentElement);

  //   if (
  //     parseInt(segmentElements.segmentDisplayTop.textContent, 10) === timeValue
  //   ) {
  //     return;
  //   }

  //   segmentElements.segmentOverlay.classList.add("flip");

  //   updateSegmentValues(
  //     segmentElements.segmentDisplayTop,
  //     segmentElements.segmentOverlayBottom,
  //     timeValue
  //   );

  //   function finishAnimation() {
  //     segmentElements.segmentOverlay.classList.remove("flip");
  //     updateSegmentValues(
  //       segmentElements.segmentDisplayBottom,
  //       segmentElements.segmentOverlayTop,
  //       timeValue
  //     );

  //     this.removeEventListener("animationend", finishAnimation);
  //   }

  //   segmentElements.segmentOverlay.addEventListener(
  //     "animationend",
  //     finishAnimation
  //   );
  // }

  // function updateTimeSection(sectionID, timeValue) {
  //   const firstNumber = Math.floor(timeValue / 10) || 0;
  //   console.log(firstNumber);
  //   const secondNumber = timeValue % 10 || 0;
  //   const sectionElement = document.getElementById(sectionID);
  //   const timeSegments = sectionElement.querySelectorAll(".time-segment");

  //   updateTimeSegment(timeSegments[0], firstNumber);
  //   updateTimeSegment(timeSegments[1], secondNumber);
  // }

  // updateTimeSection("seconds", seconds);
  // updateTimeSection("minutes", minutes);
  // updateTimeSection("hours", hours);

  return (
    <div className="countdown">
      <DateTimeDisplay
        id={"days"}
        title={"Days"}
        dateTime={{ days, hours, minutes, seconds }}
      />
      <DateTimeDisplay
        id={"hours"}
        title={"Hours"}
        dateTime={{ days, hours, minutes, seconds }}
      />
      <DateTimeDisplay
        id={"minutes"}
        title={"Minutes"}
        dateTime={{ days, hours, minutes, seconds }}
      />
      <DateTimeDisplay
        id={"seconds"}
        title={"Seconds"}
        dateTime={{ days, hours, minutes, seconds }}
      />
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
