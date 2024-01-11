import { render } from '@testing-library/react';
import ExpenseChart from './expense-chart.component';

describe('ExpenseChart', () => {
  it('renders ExpenseChart component', () => {
    const expenseChart = render(<ExpenseChart />);
    expect(expenseChart).toMatchSnapshot();
  });
});
