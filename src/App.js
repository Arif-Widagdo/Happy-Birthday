import { CountdownDisplay } from "./components/CountdownTimer";
import { ThemeProvider } from "./providers/ThemeContext";
import Navbar from "./components/Navbar";
import { useCountdown } from "./hooks/useCountdown";
import Greetings from "./components/Greetings";
import Plants from "./components/Plants";

export default function App() {
  const toDate = "January 26, 2026 00:00:00";

  const [complete, days, hours, minutes, seconds] = useCountdown(toDate);

  return (
    <ThemeProvider>
      <Navbar />
      <main className="h-screen w-screen overflow-hidden flex items-center justify-center">
        {complete ? (
          <Greetings />
        ) : (
          <>
            <Plants />
            <CountdownDisplay
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          </>
        )}
      </main>
    </ThemeProvider>
  );
}
