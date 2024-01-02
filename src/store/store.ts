import { configureStore } from '@reduxjs/toolkit';
import { RootState } from '@/data/types';
import displayOptionsReducer from './display-options/display-options-slice';

export default configureStore<RootState>({
  reducer: {
    displayOptions: displayOptionsReducer,
  },
});
