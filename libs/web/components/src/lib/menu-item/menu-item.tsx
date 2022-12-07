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
        className="text-xs text-gray-700 font-semibold"
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
