import { screen } from '@testing-library/react';
import { renderWithWrapper } from '@/test/test-utils';
import BudgetStatusBar from './budget-status-bar.component';

describe('BudgetStatusBar', () => {
  it('renders BudgetStatusBar component', () => {
    const budgetStatusBar = renderWithWrapper(<BudgetStatusBar />);
    expect(budgetStatusBar).toMatchSnapshot();

    const title = screen.getByText('이달의예산');
    expect(title).toBeInTheDocument();
  });
});
