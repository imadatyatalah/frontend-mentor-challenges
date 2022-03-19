import React, { useState, useEffect, createContext } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");

    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");

    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light"; // light theme as the default;
};

export const ThemeContext = createContext(
  {} as { theme: string; setTheme: any }
);

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
