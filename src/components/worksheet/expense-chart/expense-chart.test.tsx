import { renderWithWrapper } from '@/test/test.utils';
import ExpenseChart from './expense-chart.component';
import { formatTick } from './expense-chart.utils';

describe('ExpenseChart', () => {
  it('renders ExpenseChart component', () => {
    const expenseChart = renderWithWrapper(<ExpenseChart />);
    expect(expenseChart).toMatchSnapshot();
  });
});

describe('formatTick()', () => {
  it('formats a tick', () => {
    expect(formatTick(1_000)).toBe('1,000');
    expect(formatTick(9_000)).toBe('9,000');

    expect(formatTick(10_000)).toBe('1만');
    expect(formatTick(90_000)).toBe('9만');

    expect(formatTick(10_000_000)).toBe('1,000만');
    expect(formatTick(90_000_000)).toBe('9,000만');

    expect(formatTick(100_000_000)).toBe('1억');
    expect(formatTick(900_000_000)).toBe('9억');

    expect(formatTick(100_000_000_000)).toBe('1,000억');
    expect(formatTick(900_000_000_000)).toBe('9,000억');
  });
});
