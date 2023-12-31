import { Outlet } from 'react-router-dom';
import { DisplayOptionsProvider } from '@/data/context/display-options-context';
import NavBar from '../nav-bar/nav-bar.component';
import DashboardHeader from '../dashboard-header/dashboard-header.component';
import {
  DashboardLayoutContainer,
  DashboardContentContainer,
} from './dashboard-layout.styles';

const DashboardLayout = () => {
  return (
    <DashboardLayoutContainer>
      <DisplayOptionsProvider>
        <NavBar />
        <DashboardContentContainer>
          <DashboardHeader />
          <Outlet />
        </DashboardContentContainer>
      </DisplayOptionsProvider>
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
