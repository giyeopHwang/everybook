import { Outlet } from 'react-router-dom';
import NavBar from '../nav-bar/NavBar.component';
import { DashboardLayoutContainer } from './DashboardLayout.styles';

const DashboardLayout = () => {
  return (
    <DashboardLayoutContainer>
      <NavBar />
      <Outlet />
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
