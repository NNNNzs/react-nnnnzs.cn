"use client";
import SunIcon from "../icons/sun.svg";
import MoonIcon from "../icons/moon.svg";
import { useEffect, useState } from "react";

const ThemeSetting = () => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.body.classList.contains("dark"));
  }, []);

  const toggleDark = () => {
    document.body.classList.toggle("dark");
    setDark(isDark);
  };

  return (
    <button onClick={() => toggleDark()} className="mr-4">
      <div className="w-4 h-4 text-[1.2rem]">
        {isDark ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
      </div>
    </button>
  );
};
export default ThemeSetting;
