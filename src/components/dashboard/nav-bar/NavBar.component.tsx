import { BanknotesIcon } from '@heroicons/react/24/outline';

import NavBarMenu from './nav-bar-menu/NavBarMenu.component';
import NavBarSectionGroup from './nav-bar-section-group/NavBarSectionGroup.component';
import { NavBarContainer, TitleLink } from './NavBar.styles';

const NavBar = () => {
  return (
    <NavBarContainer>
      <TitleLink to="/dashboard">
        <BanknotesIcon style={{ width: '1.5rem', height: '1.5rem' }} />
        <span>모두의 가계부</span>
      </TitleLink>
      <NavBarMenu />
      <NavBarSectionGroup />
    </NavBarContainer>
  );
};

export default NavBar;
