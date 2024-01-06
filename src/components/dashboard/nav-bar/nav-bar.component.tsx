import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectDisplayOptions } from '@/store/display-options/display-options-slice';

import { Savings } from '@mui/icons-material';
import NavBarMenu from './nav-bar-menu/nav-bar-menu.component';
import NavBarSectionGroup from './nav-bar-section-group/nav-bar-section-group.component';
import { NavBarContainer, Title, TitleLink } from './nav-bar.styles';

const NavBar = () => {
  const { showNavBar } = useSelector(selectDisplayOptions);

  if (!showNavBar) {
    return null;
  }

  return (
    <NavBarContainer
      component="nav"
      color="primary.contrastText"
      bgcolor="primary.main"
    >
      <TitleLink
        component={Link}
        to="/dashboard"
        color="primary.contrastText"
        bgcolor="primary.light"
        borderBottom={1}
        borderColor="divider"
        underline="none"
      >
        <Savings />
        <Title>모두의 가계부</Title>
      </TitleLink>
      <NavBarMenu />
      <NavBarSectionGroup />
    </NavBarContainer>
  );
};

export default NavBar;
