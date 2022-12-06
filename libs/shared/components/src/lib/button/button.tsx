import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps {
  children?: ReactNode;
  className: string;
  onClick: any;
}

export function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 text-white rounded-md  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  onClick: () => { console.log('click') },
}


export default Button;
