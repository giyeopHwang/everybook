import {
  PencilSquareIcon,
  DocumentChartBarIcon,
  ChartPieIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import NavBarMenuItem from './nav-bar-menu-item/nav-bar-menu-item.component';
import { NavBarMenuContainer } from './nav-bar-menu.styles';

const iconStyle = {
  width: '1rem',
  height: '1rem',
};

const NavBarMenu = () => {
  return (
    <NavBarMenuContainer>
      <NavBarMenuItem href="/dashboard">
        <PencilSquareIcon style={iconStyle} />
        <span>가계부</span>
      </NavBarMenuItem>
      <NavBarMenuItem href="/dashboard/report">
        <DocumentChartBarIcon style={iconStyle} />
        <span>보고서</span>
      </NavBarMenuItem>
      <NavBarMenuItem href="/dashboard/budget">
        <ChartPieIcon style={iconStyle} />
        <span>예산 관리</span>
      </NavBarMenuItem>
      <NavBarMenuItem href="/dashboard/account">
        <WalletIcon style={iconStyle} />
        <span>분류 관리</span>
      </NavBarMenuItem>
    </NavBarMenuContainer>
  );
};

export default NavBarMenu;
