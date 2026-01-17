import { CountdownDisplay } from "./components/CountdownTimer";
import { ThemeProvider } from "./providers/ThemeContext";
import Navbar from "./components/Navbar";
import { useCountdown } from "./hooks/useCountdown";
import Greetings from "./components/Greetings";
import Plants from "./components/Plants";

export default function App() {
  const toDate = "January 26, 2026 00:00:00";

  const [complete, days, hours, minutes, seconds] = useCountdown(toDate);

  const getAge = (birthDate) => {
    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) return 0; // future-proofing

    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <ThemeProvider>
      <Navbar />
      <main className="h-screen w-screen overflow-hidden flex items-center justify-center">
        {complete ? (
          <Greetings
            name="Anisa Khoiriyah, Amd. Kep"
            age={getAge("1998-01-26")}
            images={require("./assets/img/anisa/2.jpeg")}
          />
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
