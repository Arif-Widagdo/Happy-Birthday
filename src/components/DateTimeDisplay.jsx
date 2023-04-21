import React, { useEffect, useState } from "react";

const DateTimeDisplay = ({ value, isFlip, datas }) => {
  console.log(datas);
  return (
    <div className="flip-card" {...(datas = true)}>
      <div className="top">0</div>
      <div className="bottom">0</div>
    </div>
  );
};

export default DateTimeDisplay;
