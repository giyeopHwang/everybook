import { createSlice } from '@reduxjs/toolkit';
import { ExpensesState } from './expenses-slice.const';

const initialState: ExpensesState = {
  expenses: [],
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    setExpenses: (state, { payload }) => {
      state.expenses = payload;
    },
    addExpenses: (state, { payload }) => {
      state.expenses = [...state.expenses, ...payload];
    },
    removeExpenses: (state, { payload }) => {
      payload.forEach((id: string) => {
        state.expenses = state.expenses.filter((expense) => expense.id !== id);
      });
    },
    modifyExpense: (state, { payload }) => {
      const { id, newExpense } = payload;

      state.expenses = state.expenses.map((expense) => {
        return expense.id === id ? newExpense : expense;
      });
    },
  },
  selectors: {
    selectExpenses: (state) => state.expenses,
    selectExpensesByCategory: (state) => {
      const expensesByCategory: { [categoryId: string]: number } = {};
      state.expenses.forEach(({ cash, card, category }) => {
        category = category || '__';
        expensesByCategory[category] = expensesByCategory[category] || 0;
        expensesByCategory[category] += (cash || 0) + (card || 0);
      });
      return expensesByCategory;
    },
    selectExpensesByType: (state) => {
      const [cashExpenses, cardExpenses] = state.expenses.reduce(
        ([cashAcc, cardAcc], { cash, card }) => {
          cashAcc += cash || 0;
          cardAcc += card || 0;
          return [cashAcc, cardAcc];
        },
        [0, 0]
      );

      return {
        cashExpenses,
        cardExpenses,
        totalExpenses: cashExpenses + cardExpenses,
      };
    },
  },
});

export default expensesSlice.reducer;

export const { setExpenses, addExpenses, removeExpenses, modifyExpense } =
  expensesSlice.actions;
export const {
  selectExpenses,
  selectExpensesByCategory,
  selectExpensesByType,
} = expensesSlice.selectors;
