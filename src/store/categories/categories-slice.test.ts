import { setupRootState } from '@/test/test.utils';
import categoriesReducer, {
  setExpenseCategories,
  selectCategories,
  selectExpenseCategories,
} from './categories-slice';

describe('categoriesSlice', () => {
  const mockExpenseCategories = [
    { id: '__', name: '미분류' },
    { id: '0', name: '식비' },
    { id: '1', name: '주거/통신' },
    { id: '2', name: '생활용품' },
    { id: '3', name: '의복/미용' },
    { id: '4', name: '건강/문화' },
    { id: '5', name: '교육/육아' },
    { id: '6', name: '교통/차량' },
    { id: '7', name: '경조사/회비' },
    { id: '8', name: '세금/이자' },
    { id: '9', name: '용돈/기타' },
    { id: '10', name: '저축/보험' },
    { id: '11', name: '이체/대체' },
    { id: '12', name: '카드대금' },
  ];

  describe('reducers', () => {
    it('initializes', () => {
      expect(categoriesReducer(undefined, { type: 'unknown' })).toEqual({
        expenseCategories: mockExpenseCategories,
      });
    });

    describe('setExpenseCategories', () => {
      it('sets expenseCategories with `setExpenseCategories` action', () => {
        expect(
          categoriesReducer(
            undefined,
            setExpenseCategories([
              { id: '0', name: 'FOO' },
              { id: '1', name: 'BAR' },
            ])
          )
        ).toEqual({
          expenseCategories: [
            { id: '0', name: 'FOO' },
            { id: '1', name: 'BAR' },
          ],
        });
      });
    });
  });

  describe('selectors', () => {
    describe('selectCategories', () => {
      it('selects entire categories', () => {
        const rootState = setupRootState({
          categories: {
            expenseCategories: mockExpenseCategories,
          },
        });

        expect(selectCategories(rootState)).toEqual({
          expenseCategories: mockExpenseCategories,
        });
      });
    });

    describe('selectExpenseCategories', () => {
      it('selects expenseCategories', () => {
        const rootState = setupRootState({
          categories: {
            expenseCategories: mockExpenseCategories,
          },
        });

        expect(selectExpenseCategories(rootState)).toEqual(
          mockExpenseCategories
        );
      });
    });
  });
});
