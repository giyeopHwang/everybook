import { render } from '@testing-library/react';
import ExpenseGrid from './expense-grid.component';

describe('ExpenseGrid', () => {
  it('renders ExpenseGrid component', () => {
    const expenseGrid = render(<ExpenseGrid />);
    expect(expenseGrid).toMatchSnapshot();
  });
});
