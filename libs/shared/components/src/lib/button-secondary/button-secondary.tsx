import Link from "next/link";
import { ReactNode } from "react";

/* eslint-disable-next-line */
export interface ButtonSecondaryProps {
  children?: ReactNode;
  className?: string;
  onClick?: any;
  outline?: boolean;
  path?: string;
}

export function ButtonSecondary({ children, className, onClick, outline, path }: ButtonSecondaryProps) {
  const classes = `py-2 px-6 text-xs rounded-l-xl rounded-t-xl bg-primary-200 text-primary hover:text-white font-bold transition duration-200`
  if (path?.length) {
    return (
      <Link
        className={`${classes} ${className}`}
        href={path}
      >
        {children}
      </Link>
    )
  }
  return (
    <button
      className={`${classes} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;
