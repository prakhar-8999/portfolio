"use client";
import {useState} from "react";
import {DarkModeSwitch} from "react-toggle-dark-mode";

const ToogleTheme = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleDarkMode = (checked: boolean) => {
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(checked);
  };
  return (
    <div className="fixed bottom-0 right-12">
      <DarkModeSwitch
        style={{marginBottom: "2rem"}}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </div>
  );
};

export default ToogleTheme;
