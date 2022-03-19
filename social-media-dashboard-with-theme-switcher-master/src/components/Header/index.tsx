import ColorModeToggle from "./ColorModeToggle";

const Header = () => {
  return (
    <header className="divide-y-[1px] divide-[#63687e] space-y-[26px] sm:flex sm:items-center sm:justify-between sm:divide-none sm:space-y-0 sm:my-12">
      <div>
        <h1 className="text-2xl font-bold dark:text-white">
          Social Media Dashboard
        </h1>

        <p className="font-bold text-[#63687e]">Total Followers: 23,004</p>
      </div>

      <ColorModeToggle />
    </header>
  );
};

export default Header;
