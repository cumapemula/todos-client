import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
}

function Card({
  children,
  className = "",
  ...others
}: CardProps) {
  return (
    <div
      className={`bg-slate-300 p-10 rounded lg:w-1/4 flex flex-col justify-center items-center ${className}`}
      {...others}
    >
      {children}
    </div>
  );
}

export default Card;
