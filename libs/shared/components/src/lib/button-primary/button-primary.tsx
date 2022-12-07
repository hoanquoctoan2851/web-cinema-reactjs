import { ReactNode } from 'react';
import Link from 'next/link';
/* eslint-disable-next-line */
export interface ButtonPrimaryProps {
  children?: ReactNode;
  className?: string;
  onClick?: any;
  outline?: boolean;
  path?: string;
  type?: buttonType;
}
export enum buttonType {
  button = 'button',
  submit = 'submit',
  reset = 'reset'
}

export function ButtonPrimary({ children, className, onClick, outline, path, type }: ButtonPrimaryProps) {
  const classes = `px-4 py-2 rounded-md border-primary border font-semibold  'hover:text-white hover:bg-primary hover:border-white text-primary'}`
  const typeButton = type || 'button'
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
      type={typeButton}
    >
      {children}
    </button>
  );
}

ButtonPrimary.defaultProps = {
  className: '',
  outline: false,
  type: 'button',
  onClick: () => { console.log('click') },
}


export default ButtonPrimary;
