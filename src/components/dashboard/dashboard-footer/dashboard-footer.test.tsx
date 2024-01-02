import { renderWithWrapper } from '@/test/test-utils';
import DashboardFooter from './dashboard-footer.components';

describe('DashboardFooter', () => {
  it('renders DashboardFooter component', () => {
    const dashboardFooter = renderWithWrapper(<DashboardFooter />);
    expect(dashboardFooter).toMatchSnapshot();
  });
});
