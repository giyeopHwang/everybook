import { Outlet } from 'react-router-dom';

import { Container } from '@mui/material';
import NavBar from '../nav-bar/nav-bar.component';
import DashboardHeader from '../dashboard-header/dashboard-header.component';
import DashboardFooter from '../dashboard-footer/dashboard-footer.components';
import {
  DashboardLayoutContainer,
  DashboardContentContainer,
} from './dashboard-layout.styles';
import { useSelector } from 'react-redux';
import { selectDisplayOptions } from '@/store/display-options/display-options-slice';

const DashboardLayout = () => {
  const { showNavBar } = useSelector(selectDisplayOptions);

  return (
    <Container disableGutters maxWidth={false}>
      <DashboardLayoutContainer>
        {showNavBar && <NavBar />}
        <DashboardContentContainer>
          <DashboardHeader />
          <Outlet />
        </DashboardContentContainer>
      </DashboardLayoutContainer>
      <DashboardFooter />
    </Container>
  );
};

export default DashboardLayout;
