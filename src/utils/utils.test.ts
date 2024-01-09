import { displayAmount, formatDate, formatTick } from './utils';

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
});
