import { RootState } from '@/store/store';
import { renderWithWrapper } from '@/test/test.utils';
import DashboardLayout from './dashboard-layout.compoent';

describe('DashboardLayout', () => {
  it('renders DashboardLayout component', () => {
    const dashboardLayout = renderWithWrapper(<DashboardLayout />);
    expect(dashboardLayout).toMatchSnapshot();
  });

  it('hides NavBar component when specified', () => {
    const initialState: Partial<RootState> = {
      displayOptions: {
        showAmount: true,
        showNavBar: false,
      },
    };

    const dashboardLayout = renderWithWrapper(<DashboardLayout />, {
      preloadedState: initialState,
    });
    expect(dashboardLayout).toMatchSnapshot();
  });
});
