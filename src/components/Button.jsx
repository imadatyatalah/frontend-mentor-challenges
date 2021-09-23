const Button = ({ children, className }) => (
  <button
    className={`font-Alata uppercase tracking-widest pt-1 pb-2 px-12 border-black border hover:bg-black hover:text-white duration-300 focus:outline-none ${className}`}
  >
    {children}
  </button>
);

export default Button;
