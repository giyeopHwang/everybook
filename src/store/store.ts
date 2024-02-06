import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories-slice';
import displayOptionsReducer from './display-options/display-options-slice';
import expensesReducer from './expenses/expenses-slice';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  displayOptions: displayOptionsReducer,
  expenses: expensesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
