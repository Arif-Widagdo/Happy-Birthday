import CountdownTimer from "./components/CountdownTimer";

function App() {
  const NOW_IN_MS = new Date().getTime();
  const timeBetween = new Date("April 20, 2023 04:00:00").getTime() - NOW_IN_MS;
  const toDate = NOW_IN_MS + timeBetween;


  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  
  return (
    <div className="App">
        <h1>CIEE NCIEM ULTAH</h1>
        <CountdownTimer targetDate={toDate} />
    </div>
  );
}

export default App;
