import MockDate from 'mockdate';
import { SuppressKeyboardEventParams } from 'ag-grid-community';
import {
  displayAmount,
  formatDate,
  formatTick,
  suppressKeyboardEvent,
  generateNewExpenseInputRow,
} from './utils';

describe('utils', () => {
  describe('displayAmount()', () => {
    it('displays amount as formatted string', () => {
      expect(displayAmount(1_000_000)).toBe('1,000,000');
      expect(displayAmount(1_000_000, true)).toBe('1,000,000');
      expect(displayAmount(1_000_000, true, 'custom')).toBe('1,000,000');
    });

    it('displays a placeholder when showAmount is specified falsy', () => {
      expect(displayAmount(1_000_000, false)).toBe('*********');
      expect(displayAmount(1_000_000, false, 'custom')).toBe('custom');
    });
  });

  describe('formatDate()', () => {
    it('formats a date', () => {
      expect(formatDate(new Date('2023-12-31'))).toBe('2023년 12월 31일 (일)');
      expect(formatDate(new Date('2024-01-01'))).toBe('2024년 1월 1일 (월)');
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
});
