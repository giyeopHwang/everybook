import { displayAmount, formatDate } from './utils';

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
});
