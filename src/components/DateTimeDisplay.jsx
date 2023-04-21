import React, { useEffect, useState } from "react";

const DateTimeDisplay = ({ value, isFlip }) => {
  const [topHalf, setTopHalf] = useState(null);
  const [bottomHalf, setBottomHalf] = useState(null);
  const [topFlip, setTopFlip] = useState(null);
  const [bottomFlip, setBottomFlip] = useState(null);

  const flip = () => {
    setTopHalf(document.querySelector(".top"));

    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");

    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");

    document.querySelector(".bottom").append(topFlip, bottomFlip);
  };
  console.log(value);
  useEffect(() => {
    const interval = setInterval(() => {
      if (topHalf !== value) {
        flip();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flip-card`}>
      <div className="">
        <div className="top">{value}</div>
        <div className={`bottom`}>{value}</div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default DateTimeDisplay;
