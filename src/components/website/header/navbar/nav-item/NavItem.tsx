'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItem = ({ href, label, Icon }: INavLinkItem) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`relative  font-[400] text-[16px]  hover:text-CLR_primary ${pathname === href ? 'text-CLR_primary' : 'text-[#909090]'}`}>
      {Icon && <Icon />}
      {label}
      <span className={`absolute w-1/2 h-0.5 bg-red-300 bottom-0 left-0 ${pathname === href ? 'visible' : 'hidden'}`}></span>
    </Link>
  );
};

export default NavItem;
