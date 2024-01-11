import { renderWithWrapper } from '@/test/test.utils';
import DashboardLayout from './dashboard-layout.compoent';

describe('DashboardLayout', () => {
  it('renders DashboardLayout component', () => {
    const dashboardLayout = renderWithWrapper(<DashboardLayout />);
    expect(dashboardLayout).toMatchSnapshot();
  });
});
