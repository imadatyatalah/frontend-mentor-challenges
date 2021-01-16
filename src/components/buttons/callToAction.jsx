const CallToAction = ({ isMobile, children }) => {
  return (
    <>
      <button
        className={`font-Alata uppercase tracking-widest pt-1 pb-2 px-12 border-black hover:bg-black hover:text-white duration-300 focus:outline-none ${
          isMobile ? "mt-2 mb-5 sm:hidden" : "hidden sm:block sm:mb-2"
        }`}
        style={{ borderWidth: "1px" }}
      >
        {children}
      </button>
    </>
  );
};

export default CallToAction;
