import React, { useEffect, useState } from "react";

export default function Timer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_secconds = parseFloat(Math.floor(milliseconds / 1000));
    let total_minutes = parseFloat(Math.floor(total_secconds / 60));
    let total_hours = parseFloat(Math.floor(total_minutes / 60));
    let days = parseFloat(Math.floor(total_hours / 24));

    let seconds = parseInt(total_secconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return `${days} :  ${hours} : ${minutes} : ${seconds}`;
  };

  return <div>{getFormattedTime(time)}</div>;
}
