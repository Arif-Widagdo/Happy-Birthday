import React, { useState } from "react";

export default function CountDown() {
  return (
    <div className="countDown w-full h-screen flex items-center justify-center">
      <div className="flip-card">
        <div className="top">5</div>
        <div className="bottom">5</div>
      </div>
    </div>
  );
}
