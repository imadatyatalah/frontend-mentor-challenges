import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { children, className, ...rest } = props;

  return (
    <button
      className={`element py-2 px-7 rounded-md shadow-custom disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
