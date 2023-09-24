import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
}

function Container({
  children,
  className = "",
  ...others
}: ContainerProps) {
  return (
    <div className={`min-h-screen flex flex-col flex-wrap justify-center items-center bg-slate-950 ${className}`} {...others}>{children}</div>
  );
}

export default Container;
