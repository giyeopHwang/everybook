import { fireEvent, screen } from '@testing-library/react';
import MockDate from 'mockdate';
import { SuppressKeyboardEventParams } from 'ag-grid-community';
import { renderWithWrapper } from '@/test/test.utils';
import ExpensePanel from './expense-panel.component';
import {
  suppressKeyboardEvent,
  generateNewExpenseInputRow,
} from './expense-panel.utils';

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

describe('suppressKeyboardEvent()', () => {
  it('suppresses when `Tab` key pressed while composing', () => {
    const params = {
      event: {
        key: 'Tab',
        isComposing: true,
      } as KeyboardEvent,
    } as SuppressKeyboardEventParams;

    expect(suppressKeyboardEvent(params)).toBeTruthy();
  });

  it('does not suppress when non `Tab` key pressed', () => {
    const params = {
      event: {
        key: 'Enter',
        isComposing: true,
      } as KeyboardEvent,
    } as SuppressKeyboardEventParams;

    expect(suppressKeyboardEvent(params)).toBeFalsy();
  });

  it('does not suppress when not composing', () => {
    const params = {
      event: {
        key: 'Tab',
        isComposing: false,
      } as KeyboardEvent,
    } as SuppressKeyboardEventParams;

    expect(suppressKeyboardEvent(params)).toBeFalsy();
  });
});

describe('generateNewExpenseInputRow()', () => {
  beforeEach(() => {
    MockDate.set('2024-01-01');
  });

  afterEach(() => {
    MockDate.reset();
  });

  it('generates new expense input row with pre-defined vlaue', () => {
    const { id, isSelected, place, item, date, isWaste } =
      generateNewExpenseInputRow();
    expect(id).toBeDefined();
    expect(isSelected).toBeFalsy();
    expect(place).toBe('');
    expect(item).toBe('');
    expect(date).toEqual(new Date('2024-01-01'));
    expect(isWaste).toBeFalsy();
  });
});
