import React from "react";

const Button = ({ children, variant = "solid", onClick }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition";
  const variants = {
    solid: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
