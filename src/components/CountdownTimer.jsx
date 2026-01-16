import DateTimeDisplay from "./DateTimeDisplay";

export const CountdownDisplay = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="showCounter">
      <div className="countdown">
        <div className="countdown-grid">
          <DateTimeDisplay
            id={"days"}
            title={"Days"}
            dateTime={{ days, hours, minutes, seconds }}
          />
          <div className="mb-1 text-black dark:text-white text-8xl lg:text-9xl">
            :
          </div>
          <DateTimeDisplay
            id={"hours"}
            title={"Hours"}
            dateTime={{ days, hours, minutes, seconds }}
          />
        </div>
        <div className="hidden mb-1 text-black dark:text-white text-8xl lg:text-9xl md:block">
          :
        </div>
        <div className="countdown-grid">
          <DateTimeDisplay
            id={"minutes"}
            title={"Minutes"}
            dateTime={{ days, hours, minutes, seconds }}
          />
          <div className="mb-1 text-black dark:text-white text-8xl lg:text-9xl">
            :
          </div>
          <DateTimeDisplay
            id={"seconds"}
            title={"Seconds"}
            dateTime={{ days, hours, minutes, seconds }}
          />
        </div>
      </div>
    </div>
  );
};
