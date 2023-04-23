import React, { useState } from "react";
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
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
  };

  return (
    <>
      <nav className="navbar" style={themeStyles}>
        <div className="navbar-section">
          <button type="button" className="">
            <Bars3BottomLeftIcon className="h-6 w-6 text-black" />
          </button>
          <Switch
            checked={darkTheme}
            onChange={toggleTheme}
            className={`bg-gray-200 relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Themes</span>
            <span
              className={`${
                darkTheme ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            >
              {darkTheme ? (
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
