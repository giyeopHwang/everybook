import { setupRootState } from '@/test/test.utils';
import { Expense } from '@/types/types';

import expensesReducer, {
  setExpenses,
  addExpenses,
  removeExpenses,
  modifyExpense,
  selectExpenses,
  selectExpensesByCategory,
  selectExpensesByType,
} from './expenses-slice';

describe('expensesSlice', () => {
  describe('reducers', () => {
    it('initializes', () => {
      expect(expensesReducer(undefined, { type: 'unknown' })).toEqual({
        expenses: [],
      });
    });

    describe('setExpenses', () => {
      it('sets expenses with `setExpenses` action', () => {
        expect(
          expensesReducer(
            undefined,
            setExpenses([
              {
                id: '1',
                isSelected: false,
                date: new Date('2024.01.01'),
                place: 'PLACE_1',
                item: 'ITEM_1',
              },
              {
                id: '2',
                isSelected: false,
                date: new Date('2024.01.01'),
                place: 'PLACE_2',
                item: 'ITEM_2',
              },
            ])
          )
        ).toEqual({
          expenses: [
            {
              id: '1',
              isSelected: false,
              date: new Date('2024.01.01'),
              place: 'PLACE_1',
              item: 'ITEM_1',
            },
            {
              id: '2',
              isSelected: false,
              date: new Date('2024.01.01'),
              place: 'PLACE_2',
              item: 'ITEM_2',
            },
          ],
        });
      });
    });

    describe('addExpenses', () => {
      it('adds expenses with `addExpenses` action', () => {
        expect(
          expensesReducer(
            {
              expenses: [
                {
                  id: '1',
                  isSelected: false,
                  date: new Date('2024.01.01'),
                  place: 'PLACE_1',
                  item: 'ITEM_1',
                },
                {
                  id: '2',
                  isSelected: false,
                  date: new Date('2024.01.01'),
                  place: 'PLACE_2',
                  item: 'ITEM_2',
                },
              ],
            },
            addExpenses([
              {
                id: '3',
                isSelected: false,
                data: new Date('2024.01.01'),
                place: 'PLACE_3',
                item: 'ITEM_3',
              },
              {
                id: '4',
                isSelected: false,
                data: new Date('2024.01.01'),
                place: 'PLACE_4',
                item: 'ITEM_4',
              },
            ])
          )
        ).toEqual({
          expenses: [
            {
              id: '1',
              isSelected: false,
              date: new Date('2024.01.01'),
              place: 'PLACE_1',
              item: 'ITEM_1',
            },
            {
              id: '2',
              isSelected: false,
              date: new Date('2024.01.01'),
              place: 'PLACE_2',
              item: 'ITEM_2',
            },
            {
              id: '3',
              isSelected: false,
              data: new Date('2024.01.01'),
              place: 'PLACE_3',
              item: 'ITEM_3',
            },
            {
              id: '4',
              isSelected: false,
              data: new Date('2024.01.01'),
              place: 'PLACE_4',
              item: 'ITEM_4',
            },
          ],
        });
      });
    });

    describe('removeExpenses', () => {
      it('removes expenses with `removesExpenses` action', () => {
        expect(
          expensesReducer(
            {
              expenses: [
                {
                  id: '1',
                  isSelected: false,
                  date: new Date('2024.01.01'),
                  place: 'PLACE_1',
                  item: 'ITEM_1',
                },
                {
                  id: '2',
                  isSelected: false,
                  date: new Date('2024.01.01'),
                  place: 'PLACE_2',
                  item: 'ITEM_2',
                },
              ],
            },
            removeExpenses(['1'])
          )
        ).toEqual({
          expenses: [
            {
              id: '2',
              isSelected: false,
              date: new Date('2024.01.01'),
              place: 'PLACE_2',
              item: 'ITEM_2',
            },
          ],
        });
      });

      expect(
        expensesReducer(
          {
            expenses: [
              {
                id: '1',
                isSelected: false,
                date: new Date('2024.01.01'),
                place: 'PLACE_1',
                item: 'ITEM_1',
              },
              {
                id: '2',
                isSelected: false,
                date: new Date('2024.01.01'),
                place: 'PLACE_2',
                item: 'ITEM_2',
              },
            ],
          },
          removeExpenses(['1', '2'])
        )
      ).toEqual({
        expenses: [],
      });
    });

    describe('modifyExpense', () => {
      it('modifies expenses with `modifyExpense` action', () => {
        expect(
          expensesReducer(
            {
              expenses: [
                {
                  id: '1',
                  isSelected: false,
                  date: new Date('2024.01.01'),
                  place: 'PLACE_1',
                  item: 'ITEM_1',
                },
                {
                  id: '2',
                  isSelected: false,
                  date: new Date('2024.01.01'),
                  place: 'PLACE_2',
                  item: 'ITEM_2',
                },
              ],
            },
            modifyExpense({
              id: '1',
              newExpense: {
                id: '1',
                isSelected: true,
                date: new Date('2024.01.02'),
                place: 'PLACE_3',
                item: 'ITEM_3',
              },
            })
          )
        ).toEqual({
          expenses: [
            {
              id: '1',
              isSelected: true,
              date: new Date('2024.01.02'),
              place: 'PLACE_3',
              item: 'ITEM_3',
            },
            {
              id: '2',
              isSelected: false,
              date: new Date('2024.01.01'),
              place: 'PLACE_2',
              item: 'ITEM_2',
            },
          ],
        });
      });
    });
  });

  describe('selectors', () => {
    const mockExpenses: Expense[] = [
      {
        id: '1',
        isSelected: false,
        date: new Date('2024.01.01'),
        place: '다이소',
        item: '주방세제',
        cash: 2_000,
        card: 0,
        cashAccount: 'PAYCO',
        cardAccount: null,
        category: '2',
        isWaste: false,
      },
      {
        id: '2',
        isSelected: false,
        date: new Date('2024.01.01'),
        place: '서울호떡',
        item: '호떡',
        cash: 3_000,
        card: 0,
        cashAccount: '네이버페이머니통장',
        cardAccount: '네이버페이체크카드',
        category: '1',
        isWaste: false,
      },
      {
        id: '3',
        isSelected: false,
        date: new Date('2024.01.01'),
        place: '농부의아들',
        item: '고구마',
        cash: 3_000,
        card: 0,
        cashAccount: '네이버페이머니통장',
        cardAccount: '네이버페이체크카드',
        category: '1',
        isWaste: false,
      },
      {
        id: '4',
        isSelected: false,
        date: new Date('2024.01.02'),
        place: '롯데리아',
        item: '핫크리스피버거세트',
        cash: 0,
        card: 7_800,
        cashAccount: null,
        cardAccount: '톡톡 my point 카드',
        category: '1',
        isWaste: true,
      },
      {
        id: '5',
        isSelected: false,
        date: new Date('2024.01.02'),
        place: '쿠팡',
        item: '에어프라이어',
        cash: 0,
        card: 150_000,
        cashAccount: null,
        cardAccount: '톡톡 my point 카드',
        category: '2',
        isWaste: false,
      },
      {
        id: '6',
        isSelected: false,
        date: new Date('2024.01.03'),
        place: '국민건강보험',
        item: '건강보험료',
        cash: 45_000,
        card: 0,
        cashAccount: '하나주거래통장',
        cardAccount: null,
        category: '4',
        isWaste: false,
      },
      {
        id: '7',
        isSelected: false,
        date: new Date('2024.01.03'),
        place: '어머니',
        item: '용돈',
        cash: 200_000,
        card: 0,
        cashAccount: '하나주거래통장',
        cardAccount: null,
        category: '9',
        isWaste: false,
      },
      {
        id: '8',
        isSelected: false,
        date: new Date('2024.01.04'),
        place: 'GAK',
        item: '커트',
        cash: 23_000,
        card: 0,
        cashAccount: '네이버페이머니통장',
        cardAccount: '네이버페이체크카드',
        category: '3',
        isWaste: false,
      },
      {
        id: '9',
        isSelected: false,
        date: new Date('2024.01.04'),
        place: '농부의아들',
        item: '귤',
        cash: 5_000,
        card: 0,
        cashAccount: '네이버페이머니통장',
        cardAccount: '네이버페이체크카드',
        category: '1',
        isWaste: false,
      },
      {
        id: '10',
        isSelected: false,
        date: new Date('2024.01.05'),
        place: '전통한우푸줏간',
        item: '삼겹살',
        cash: 0,
        card: 13_000,
        cashAccount: null,
        cardAccount: '현대카드ZERO',
        category: '1',
        isWaste: false,
      },
      {
        id: '11',
        isSelected: false,
        date: new Date('2024.01.05'),
        place: 'GS25',
        item: '과자',
        cash: 3_000,
        card: 0,
        cashAccount: 'PAYCO',
        cardAccount: null,
        category: '1',
        isWaste: true,
      },
      {
        id: '12',
        isSelected: false,
        date: new Date('2024.01.05'),
        place: '마이프로틴',
        item: '보충제',
        cash: 0,
        card: 70_000,
        cashAccount: null,
        cardAccount: '톡톡 my point 카드',
        category: '4',
        isWaste: false,
      },
      {
        id: '13',
        isSelected: false,
        date: new Date('2024.01.06'),
        place: '다이소',
        item: '밀폐용기',
        cash: 3_000,
        card: 0,
        cashAccount: 'PAYCO',
        cardAccount: null,
        category: '2',
        isWaste: true,
      },
      {
        id: '14',
        isSelected: false,
        date: new Date('2024.01.06'),
        place: '인터넷등기소',
        item: '수수료',
        cash: 700,
        card: 0,
        cashAccount: '네이버페이머니통장',
        cardAccount: '네이버페이체크카드',
        category: '1',
        isWaste: false,
      },
      {
        id: '15',
        isSelected: false,
        date: new Date('2024.01.07'),
        place: '하나은행',
        item: '대출이자',
        cash: 250_000,
        card: 0,
        cashAccount: '하나주거래통장',
        cardAccount: '',
        category: '8',
        isWaste: false,
      },
    ];

    describe('selectExpenses', () => {
      it('selects all expenses', () => {
        const rootState = setupRootState({
          expenses: {
            expenses: mockExpenses,
          },
        });

        expect(selectExpenses(rootState)).toEqual(mockExpenses);
      });
    });

    describe('selectExpensesByCategory', () => {
      it('selects expenses by category', () => {
        const rootState = setupRootState({
          expenses: {
            expenses: mockExpenses,
          },
        });

        expect(selectExpensesByCategory(rootState)).toEqual({
          '1': 35_500,
          '2': 155_000,
          '3': 23_000,
          '4': 115_000,
          '8': 250_000,
          '9': 200_000,
        });
      });
    });

    describe('selectExpensesByType', () => {
      it('selects expenses by type', () => {
        const rootState = setupRootState({
          expenses: {
            expenses: mockExpenses,
          },
        });

        expect(selectExpensesByType(rootState)).toEqual({
          cardExpenses: 240_800,
          cashExpenses: 537_700,
          totalExpenses: 778_500,
        });
      });
    });
  });
});
