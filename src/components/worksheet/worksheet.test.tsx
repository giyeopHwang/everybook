import { fireEvent, screen } from '@testing-library/react';
import MockDate from 'mockdate';
import { renderWithWrapper } from '@/test/test.utils';
import Worksheet from './worksheet.component';

describe('Worksheet', () => {
  beforeEach(() => {
    MockDate.set('2024-01-01');
  });

  afterEach(() => {
    MockDate.reset();
  });

  it('renders Worksheet component', () => {
    const worksheet = renderWithWrapper(<Worksheet />);
    expect(worksheet).toMatchSnapshot();
  });

  it('changes tab when a different tab item selected', () => {
    const worksheet = renderWithWrapper(<Worksheet />);
    const expensePanel = worksheet.getByTestId('worksheet-expense-panel');
    expect(expensePanel).toBeInTheDocument();

    const incomeTabItem = screen.getByText('수익');
    fireEvent.click(incomeTabItem);
    expect(expensePanel).not.toBeInTheDocument();
  });
});
