import React from "react";

const DateTimeDisplay = ({ isFlip, value, type, isDanger }) => {
  return (
    <div className={`flip-card  `} data-hours-tens>
      {/* <div className="bottom-flip"> */}
      <div className="top">{value}</div>
      <div className={`bottom ${isFlip}`}>{value}</div>
      {/* </div> */}
    </div>
  );
};

export default DateTimeDisplay;
