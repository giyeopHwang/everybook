import { displayAmount } from './utils';

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
});
