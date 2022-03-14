const Header = () => {
  return (
    <header className="divide-y-[1px] divide-[#63687e] space-y-[26px] sm:flex sm:items-center sm:justify-between sm:divide-none sm:space-y-0 sm:my-12">
      <div>
        <h1 className="text-2xl font-bold">Social Media Dashboard</h1>

        <p className="font-bold text-[#63687e]">Total Followers: 23,004</p>
      </div>

      <div className="pt-[26px] pb-[46px] sm:p-0">
        <p className="font-bold text-[#63687e]">Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
