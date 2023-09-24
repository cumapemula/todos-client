import { ReactNode } from "react";

interface InputGroupProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
}

function InputGroup({
  children,
  className = "",
  ...others
}: InputGroupProps) {
  return (
    <div className={`bg-slate-300 w-full flex flex-col mb-3 ${className}`} {...others}>
      {children}
    </div>
  );
}

export default InputGroup;
