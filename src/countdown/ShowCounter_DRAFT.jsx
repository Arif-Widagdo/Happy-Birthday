import React, { useEffect, useState } from "react";

export default function ShowCounter() {
  return (
    <div className="countDown w-full h-screen flex items-center justify-center">
      <div className="flex gap-x-3">
        <div className="flip-card" data-hours-tens>
          <div className="top">5</div>
          <div className="bottom">5</div>
        </div>
        <div className="flip-card" data-hours-ones>
          <div className="top">5</div>
          <div className="bottom">5</div>
        </div>
      </div>
    </div>
  );
}
