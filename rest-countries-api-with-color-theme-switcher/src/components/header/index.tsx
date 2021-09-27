import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useTheme } from "next-themes";
import { Moon, MoonOutline } from "../icons/moon";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="element flex justify-between items-center shadow-md h-[80px] px-4 sm:px-10 lg:px-12">
      <h1 className="font-extrabold sm:text-xl md:text-2xl select-none">
        <Link href="/">
          <a>Where in the world?</a>
        </Link>
      </h1>

      <div className="text">
        <button
          className="flex items-center"
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
        >
          {resolvedTheme === "light" ? (
            <>
              <MoonOutline />
              <span className="pl-2">Dark Mode</span>
            </>
          ) : (
            <>
              <Moon />
              <span className="pl-2">Light Mode</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
