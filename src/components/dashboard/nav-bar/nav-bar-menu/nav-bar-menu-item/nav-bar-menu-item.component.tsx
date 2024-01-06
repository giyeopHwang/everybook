'use client';

import { Link, useLocation } from 'react-router-dom';
import { NavBarMenuItemLink } from './nav-bar-menu-item.styles';

type NavBarMenuItemProps = {
  href: string;
  children: React.ReactNode;
};

const NavBarMenuItem = ({ href, children }: NavBarMenuItemProps) => {
  const { pathname } = useLocation();
  const isSelected = href === pathname;

  return (
    <NavBarMenuItemLink
      component={Link}
      to={href}
      underline="none"
      color="primary.contrastText"
      bgcolor={isSelected ? 'primary.main' : 'primary.light'}
    >
      {children}
    </NavBarMenuItemLink>
  );
};

export default NavBarMenuItem;
