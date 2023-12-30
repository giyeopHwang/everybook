import { Outlet } from 'react-router-dom';
import NavBar from '../nav-bar/NavBar.component';
import DashboardHeader from '../dashboard-header/DashboardHeader.component';
import {
  DashboardLayoutContainer,
  DashboardContentContainer,
} from './DashboardLayout.styles';

const DashboardLayout = () => {
  return (
    <DashboardLayoutContainer>
      <NavBar />
      <DashboardContentContainer>
        <DashboardHeader />
        <Outlet />
      </DashboardContentContainer>
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
