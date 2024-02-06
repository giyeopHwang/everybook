import { createSlice } from '@reduxjs/toolkit';
import { CategoriesState } from './categories-slice.const';

const initialState: CategoriesState = {
  expenseCategories: [
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
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setExpenseCategories: (state, { payload }) => {
      state.expenseCategories = payload;
    },
  },
  selectors: {
    selectCategories: (state) => state,
    selectExpenseCategories: (state) => state.expenseCategories,
  },
});

export default categoriesSlice.reducer;

export const { setExpenseCategories } = categoriesSlice.actions;
export const { selectCategories, selectExpenseCategories } =
  categoriesSlice.selectors;
