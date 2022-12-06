import Link from 'next/link';

/* eslint-disable-next-line */
export interface MenuItemProps {
  href: string;
  name?: string;
}

export interface IMenuItem {
  href: string;
  name: string;
}

export function MenuItem({ href, name }: MenuItemProps) {
  return (
    <li>
      <Link
        className="text-sm text-blueGray-400 hover:text-primary font-semibold"
        href={href}
      >
        { name }
      </Link>
    </li>
  );
}

MenuItem.defaultProps = {
  href: '/',
  name: 'Home'
}

export default MenuItem;
