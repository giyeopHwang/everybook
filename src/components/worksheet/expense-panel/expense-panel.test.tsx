import { fireEvent, render, screen } from '@testing-library/react';
import ExpensePanel from './expense-panel.component';

describe('ExpensePanel', () => {
  it('renders ExpensePanel component', () => {
    const expensePanel = render(<ExpensePanel />);
    expect(expensePanel).toMatchSnapshot();
  });

  it('hides ExpenseChart when graph checkbox unchecked', () => {
    const { container } = render(<ExpensePanel />);
    expect(container.querySelector('canvas')).not.toBeNull();

    const graphCheckbox = screen.getByText('그래프');
    fireEvent.click(graphCheckbox);
    expect(container.querySelector('canvas')).toBeNull();
  });
});
