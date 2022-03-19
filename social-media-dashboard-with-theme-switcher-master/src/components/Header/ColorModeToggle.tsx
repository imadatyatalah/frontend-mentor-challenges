import { useContext } from "react";

import { Switch } from "@headlessui/react";

import { ThemeContext } from "../../context/ThemeContext";

const ColorModeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const enabled = theme === "light";

  const toggleColorMode = () => {
    setTheme(enabled ? "dark" : "light");
  };

  return (
    <Switch.Group>
      <div className="flex items-center justify-between pt-[26px] pb-[46px] sm:p-0">
        <Switch.Label className="font-bold text-[#63687e]">
          Dark Mode
        </Switch.Label>

        <div className="ml-[14px]">
          <Switch
            checked={enabled}
            onChange={toggleColorMode}
            className={`${
              enabled
                ? "bg-[#aeb3cb] sm:hover:bg-gradient-to-tr sm:hover:from-[#378fe6] sm:hover:to-[#3eda82]"
                : "bg-gradient-to-tr from-[#378fe6] to-[#3eda82]"
            }
          relative inline-flex flex-shrink-0 h-6 w-12 p-[3px] rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Dark Mode</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-[18px] w-[18px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
            />
          </Switch>
        </div>
      </div>
    </Switch.Group>
  );
};

export default ColorModeToggle;
