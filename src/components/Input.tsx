import React from "react";

interface InputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[#1f1147] border border-purple-800 text-white px-4 py-2 rounded outline-none mb-4"
      />
    </div>
  );
};

export default Input;
