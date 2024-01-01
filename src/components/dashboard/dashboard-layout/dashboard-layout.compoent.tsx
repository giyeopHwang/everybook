import { Outlet } from 'react-router-dom';

import NavBar from '../nav-bar/nav-bar.component';
import DashboardHeader from '../dashboard-header/dashboard-header.component';
import DashboardFooter from '../dashboard-footer/dashboard-footer.components';
import {
  DashboardLayoutContainer,
  DashboardContentContainer,
} from './dashboard-layout.styles';

const DashboardLayout = () => {
  return (
    <>
      <DashboardLayoutContainer>
        <NavBar />
        <DashboardContentContainer>
          <DashboardHeader />
          <Outlet />
        </DashboardContentContainer>
      </DashboardLayoutContainer>
      <DashboardFooter />
    </>
  );
};

export default DashboardLayout;
