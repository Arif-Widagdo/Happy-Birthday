import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className="countDown w-full flex items-center justify-center">
      <span>{type}</span>
      <div className="flex gap-x-3">
        <div className="flip-card" data-hours-tens>
          <div className="top">{value}</div>
          <div className="bottom">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
