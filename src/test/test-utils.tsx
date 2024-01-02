import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '@/store/store';

export const renderWithWrapper = (component: React.ReactElement) => {
  const Wrapper = ({ children }: { children: React.ReactElement }) => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };

  return render(component, { wrapper: Wrapper });
};
