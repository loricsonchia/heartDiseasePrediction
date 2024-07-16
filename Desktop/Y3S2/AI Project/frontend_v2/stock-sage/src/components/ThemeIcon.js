import React, { useContext } from "react";
import { MoonIcon } from "@heroicons/react/solid";
import ThemeContext from "../context/ThemeContext";

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-12 shadow-lg transition duration-300 hover:scale-125 ${
        darkMode ? "#030417" : null
      } transition duration-300 hover:scale-125`}
    >
      <MoonIcon
        className={`h-12 w-12 cursor-pointer stroke-1 ${
          darkMode
            ? "fill-yellow-400 stroke-yellow-400"
            : "fill-none stroke-neutral-400"
        }`}
      />
    </button>
  );
};

export default ThemeIcon;
