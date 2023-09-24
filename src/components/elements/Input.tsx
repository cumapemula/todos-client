import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({
  className = "",
  ...rest
}: InputProps) {
  return (
    <input
      className={`p-1 rounded shadow-md focus:outline-none ${className}`}
      {...rest}
    />
  );
}

export default Input;
