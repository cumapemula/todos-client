import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  isLoading?: boolean;
}

function Button({
  children,
  icon,
  isLoading,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`bg-cyan-600 hover:bg-cyan-400 shadow-cyan-500 shadow-md text-slate-200 tracking-wider transition-all duration-500 px-3 py-1 rounded font-bold ${className}`}
      {...rest}
    >
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {icon && <>{icon}</>}
          {children}
        </>
      )}
    </button>
  );
}

export default Button;
