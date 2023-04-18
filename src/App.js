import CountDown from "./countdown/CountDown";
import Timer from "./countdown/Timer";

function App() {
  return (
    <div className="App">
      <CountDown duration={2 * 24 * 60 * 60 * 1000} />
      <Timer duration={2 * 24 * 60 * 60 * 1000} />
    </div>
  );
}

export default App;
