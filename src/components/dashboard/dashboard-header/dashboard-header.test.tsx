import { screen } from '@testing-library/react';
import { renderWithWrapper } from '@/test/test-utils';
import DashboardHeader from './dashboard-header.component';

describe('DashboardHeader', () => {
  it('renders DashboardHeader component', () => {
    const dashboardHeader = renderWithWrapper(<DashboardHeader />);
    expect(dashboardHeader).toMatchSnapshot();

    const title = screen.getByText('가계부');
    expect(title).toBeInTheDocument();

    const hideAmountButton = screen.getByText('금액감추기');
    expect(hideAmountButton).toBeInTheDocument();
  });
});
