import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Button = ({ iconName, btnText, className }) => {
  return (
    <button className={`w-full py-2 ${className}`}>
      <span className="flex justify-center items-center gap-x-2">
        {iconName}
        {btnText}
      </span>
    </button>
  );
};

export default Button;
