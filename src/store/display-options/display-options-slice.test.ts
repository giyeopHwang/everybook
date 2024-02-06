import { setupRootState } from '@/test/test.utils';

import displayOptionsReducer, {
  setShowAmount,
  setShowNavBar,
  selectDisplayOptions,
} from './display-options-slice';

describe('displayOptionsSlice', () => {
  describe('reducers', () => {
    it('initializes', () => {
      expect(displayOptionsReducer(undefined, { type: 'unknown' })).toEqual({
        showAmount: true,
        showNavBar: true,
      });
    });

    describe('setShowAmount', () => {
      it('sets showAmount with `setShowAmount` action', () => {
        expect(displayOptionsReducer(undefined, setShowAmount(false))).toEqual({
          showAmount: false,
          showNavBar: true,
        });

        expect(displayOptionsReducer(undefined, setShowAmount(true))).toEqual({
          showAmount: true,
          showNavBar: true,
        });
      });
    });

    describe('setShowNavBar', () => {
      it('sets showAmount with `setShowNavBar` action', () => {
        expect(displayOptionsReducer(undefined, setShowNavBar(false))).toEqual({
          showAmount: true,
          showNavBar: false,
        });

        expect(displayOptionsReducer(undefined, setShowNavBar(true))).toEqual({
          showAmount: true,
          showNavBar: true,
        });
      });
    });
  });

  describe('selectors', () => {
    describe('selectDisplayOptions', () => {
      it('selects displayOptions', () => {
        const rootState = setupRootState({
          displayOptions: {
            showAmount: true,
            showNavBar: true,
          },
        });

        expect(selectDisplayOptions(rootState)).toEqual({
          showAmount: true,
          showNavBar: true,
        });
      });
    });
  });
});
