import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-orange-500 to-orange-400 text-blue-700 px-4 py-2 rounded cursor-pointer font-bold mt-4 w-full text-base"
    >
      {label}
    </button>
  );
};
