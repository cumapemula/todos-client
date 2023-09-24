import { FormHTMLAttributes } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

function Form({
  children,
  className = "",
  ...rest
}: FormProps) {
  return (
    <form
      className={`bg-slate-300 p-10 rounded lg:w-1/4 flex flex-col justify-center items-center ${className}`}
      autoComplete="off"
      {...rest}
    >
      {children}
    </form>
  );
}

export default Form;
