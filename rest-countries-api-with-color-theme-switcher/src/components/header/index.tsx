import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useTheme } from "next-themes";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="custom_max_width bg-white dark:bg-dark-blue flex justify-between items-center h-[60px] px-4 sm:px-10 lg:px-12">
      <h1 className="font-extrabold sm:text-xl md:text-2xl select-none">
        <Link href="/">
          <a>Where in the world?</a>
        </Link>
      </h1>

      <div className="text-very-dark-blue-darker dark:text-white">
        <button
          className="flex items-center"
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
        >
          {resolvedTheme === "light" ? (
            <>
              <Image
                src="/moon-outline.svg"
                width="20"
                height="20"
                alt="Moon icon"
              />
              <span className="pl-2">Dark Mode</span>
            </>
          ) : (
            <>
              <Image src="/moon.svg" width="20" height="20" alt="Moon icon" />
              <span className="pl-2">Light Mode</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
