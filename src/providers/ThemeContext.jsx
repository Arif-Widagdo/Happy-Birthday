import React, { useContext, useEffect, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    // Simpan tema saat ini ke dalam localStorage ketika nilai berubah
    localStorage.setItem("theme", theme);
    // Tambahkan atau hapus kelas CSS pada tag HTML sesuai dengan tema yang dipilih
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Fungsi untuk membaca tema awal dari prefers-color-scheme atau localStorage
  function getInitialTheme() {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  // Fungsi untuk mengganti tema
  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
