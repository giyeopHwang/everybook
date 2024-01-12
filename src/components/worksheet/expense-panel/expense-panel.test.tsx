import { fireEvent, screen } from '@testing-library/react';
import { renderWithWrapper } from '@/test/test.utils';
import ExpensePanel from './expense-panel.component';

describe('ExpensePanel', () => {
  it('renders ExpensePanel component', () => {
    const expensePanel = renderWithWrapper(<ExpensePanel />);
    expect(expensePanel).toMatchSnapshot();
  });

  it('hides ExpenseChart when graph checkbox unchecked', () => {
    const { container } = renderWithWrapper(<ExpensePanel />);
    expect(container.querySelector('canvas')).not.toBeNull();

    const graphCheckbox = screen.getByText('그래프');
    fireEvent.click(graphCheckbox);
    expect(container.querySelector('canvas')).toBeNull();
  });
});
