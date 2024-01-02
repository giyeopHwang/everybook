import { combineReducers, configureStore } from '@reduxjs/toolkit';
import displayOptionsReducer from './display-options/display-options-slice';

const rootReducer = combineReducers({
  displayOptions: displayOptionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
