import React, { useEffect } from "react";

const DateTimeDisplay = ({ id, title, dateTime }) => {
  useEffect(() => {
    function getTimeSegmentElements(segmentElement) {
      const segmentDisplay = segmentElement.querySelector(".segment-display");
      const segmentDisplayTop = segmentDisplay.querySelector(
        ".segment-display__top"
      );
      const segmentDisplayBottom = segmentDisplay.querySelector(
        ".segment-display__bottom"
      );

      const segmentOverlay = segmentDisplay.querySelector(".segment-overlay");
      const segmentOverlayTop = segmentOverlay.querySelector(
        ".segment-overlay__top"
      );
      const segmentOverlayBottom = segmentOverlay.querySelector(
        ".segment-overlay__bottom"
      );

      return {
        segmentDisplayTop,
        segmentDisplayBottom,
        segmentOverlay,
        segmentOverlayTop,
        segmentOverlayBottom,
      };
    }

    function updateSegmentValues(displayElement, overlayElement, value) {
      displayElement.textContent = value;
      overlayElement.textContent = value;
    }

    function updateTimeSegment(segmentElement, timeValue) {
      const segmentElements = getTimeSegmentElements(segmentElement);

      if (
        parseInt(segmentElements.segmentDisplayTop.textContent, 10) ===
        timeValue
      ) {
        return;
      }

      segmentElements.segmentOverlay.classList.add("flip");

      updateSegmentValues(
        segmentElements.segmentDisplayTop,
        segmentElements.segmentOverlayBottom,
        timeValue
      );

      function finishAnimation() {
        segmentElements.segmentOverlay.classList.remove("flip");
        updateSegmentValues(
          segmentElements.segmentDisplayBottom,
          segmentElements.segmentOverlayTop,
          timeValue
        );

        this.removeEventListener("animationend", finishAnimation);
      }

      segmentElements.segmentOverlay.addEventListener(
        "animationend",
        finishAnimation
      );
    }

    function updateTimeSection(sectionID, timeValue) {
      const firstNumber = Math.floor(timeValue / 10) || 0;
      const secondNumber = timeValue % 10 || 0;
      const sectionElement = document.getElementById(sectionID);
      const timeSegments = sectionElement.querySelectorAll(".time-segment");

      updateTimeSegment(timeSegments[0], firstNumber);
      updateTimeSegment(timeSegments[1], secondNumber);
    }

    updateTimeSection("days", dateTime.days);
    updateTimeSection("seconds", dateTime.seconds);
    updateTimeSection("minutes", dateTime.minutes);
    updateTimeSection("hours", dateTime.hours);
  });

  return (
    <div className="time-section" id={id}>
      <p className="title">{title}</p>
      <div className="time-group">
        <div className="time-segment">
          <div className="segment-display">
            <div className="segment-display__top"></div>
            <div className="segment-display__bottom"></div>
            <div className="segment-overlay">
              <div className="segment-overlay__top"></div>
              <div className="segment-overlay__bottom"></div>
            </div>
          </div>
        </div>
        <div className="time-segment">
          <div className="segment-display">
            <div className="segment-display__top"></div>
            <div className="segment-display__bottom"></div>
            <div className="segment-overlay">
              <div className="segment-overlay__top"></div>
              <div className="segment-overlay__bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
