import {LabelHTMLAttributes} from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

function Label({
  children,
  className = "",
  ...rest
}: LabelProps) {
  return (
    <label className={`font-medium mb-1 ${className}`} {...rest}>
      {children}
    </label>
  );
}

export default Label;
