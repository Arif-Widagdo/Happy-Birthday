import React from "react";
import {
  Bars3BottomLeftIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import { useTheme, useThemeUpdate } from "../providers/ThemeContext";
import { Switch } from "@headlessui/react";

export default function Navbar() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-section">
          <button type="button" className="">
            <Bars3BottomLeftIcon className="h-6 w-6 " />
          </button>
          <Switch
            checked={darkTheme === "dark"}
            onChange={toggleTheme}
            className={`bg-gray-200 dark:bg-[#6811D1] relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Themes</span>
            <span
              className={`${
                darkTheme === "dark" ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white dark:bg-[#b070ff] transition`}
            >
              {darkTheme === "dark" ? (
                <MoonIcon className="text-black transform" />
              ) : (
                <SunIcon className="text-black transform" />
              )}
            </span>
          </Switch>
        </div>
      </nav>
    </>
  );
}
