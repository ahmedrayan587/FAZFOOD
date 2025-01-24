import { ReactNode, FormHTMLAttributes } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
}

export default function Form({ children}: FormProps) {
  return (
    <form className={`max-w-md mx-auto p-6 rounded-lg shadow-md bg-white dark:bg-emerald-800 dark:text-white`} >
      {children}
    </form>
  );
}