'use client';

import { useLocation } from 'react-router-dom';
import { NavBarMenuItemLink } from './nav-bar-menu-item.styles';

type NavBarMenuItemProps = {
  href: string;
  children: React.ReactNode;
};

const NavBarMenuItem = ({ href, children }: NavBarMenuItemProps) => {
  const { pathname } = useLocation();

  return (
    <NavBarMenuItemLink to={href} $selected={pathname === href}>
      {children}
    </NavBarMenuItemLink>
  );
};

export default NavBarMenuItem;
