"use client";
import SunIcon from "../icons/sun.svg";
import MoonIcon from "../icons/moon.svg";
import useDark from "../hooks/useDark";

const ThemeSetting = () => {
  const { toggleDark, isDark } = useDark();
  return (
    <button onClick={() => toggleDark()} className="mr-4 text-inherit">
      <div className="w-4 h-4 text-[1.2rem] dark:fill-white">
        {isDark ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
      </div>
    </button>
  );
};
export default ThemeSetting;
