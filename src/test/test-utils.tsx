import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { RootState, setupStore } from '@/store/store';

type StoreOptions = {
  preloadedState?: Partial<RootState>;
};

export const renderWithWrapper = (
  component: React.ReactElement,
  { preloadedState = {} }: StoreOptions = {}
) => {
  const store = setupStore(preloadedState);
  const Wrapper = ({ children }: { children: React.ReactElement }) => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };

  return { store, ...render(component, { wrapper: Wrapper }) };
};
