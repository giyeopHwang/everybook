import { Edit, BarChart, PieChart, Category } from '@mui/icons-material';
import { Typography } from '@mui/material';
import NavBarMenuItem from './nav-bar-menu-item/nav-bar-menu-item.component';
import { NavBarMenuContainer } from './nav-bar-menu.styles';

const iconStyle = {
  width: '1rem',
  height: '1rem',
};

const NavBarMenu = () => {
  return (
    <NavBarMenuContainer
      component="nav"
      bgcolor="primary.light"
      borderBottom={1}
      borderColor="divider"
    >
      <NavBarMenuItem href="/dashboard">
        <Edit sx={iconStyle} />
        <Typography variant="body2">가계부</Typography>
      </NavBarMenuItem>
      <NavBarMenuItem href="/dashboard/report">
        <BarChart sx={iconStyle} />
        <Typography variant="body2">보고서</Typography>
      </NavBarMenuItem>
      <NavBarMenuItem href="/dashboard/budget">
        <PieChart sx={iconStyle} />
        <Typography variant="body2">예산 관리</Typography>
      </NavBarMenuItem>
      <NavBarMenuItem href="/dashboard/account">
        <Category sx={iconStyle} />
        <Typography variant="body2">분류 관리</Typography>
      </NavBarMenuItem>
    </NavBarMenuContainer>
  );
};

export default NavBarMenu;
