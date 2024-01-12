import { renderWithWrapper } from '@/test/test.utils';
import ExpenseChart from './expense-chart.component';

describe('ExpenseChart', () => {
  it('renders ExpenseChart component', () => {
    const expenseChart = renderWithWrapper(<ExpenseChart />);
    expect(expenseChart).toMatchSnapshot();
  });
});
