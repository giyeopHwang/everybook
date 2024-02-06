import { createSlice } from '@reduxjs/toolkit';
import { DisplayOptionsState } from './display-options-slice.const';

const initialState: DisplayOptionsState = {
  showAmount: true,
  showNavBar: true,
};

const displayOptionsSlice = createSlice({
  name: 'displayOptions',
  initialState,
  reducers: {
    setShowAmount: (state, { payload }) => {
      state.showAmount = payload;
    },
    setShowNavBar: (state, { payload }) => {
      state.showNavBar = payload;
    },
  },
  selectors: {
    selectDisplayOptions: (state) => state,
  },
});

export default displayOptionsSlice.reducer;

export const { setShowAmount, setShowNavBar } = displayOptionsSlice.actions;
export const { selectDisplayOptions } = displayOptionsSlice.selectors;
