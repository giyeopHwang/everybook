import { screen } from '@testing-library/react';
import { renderWithWrapper } from '@/test/test-utils';
import { RootState } from '@/store/store';
import NavBar from './nav-bar.component';

describe('NavBar', () => {
  it('renders NavBar component', () => {
    const navBar = renderWithWrapper(<NavBar />);
    expect(navBar).toMatchSnapshot();

    const navBarTitle = screen.getByText('모두의 가계부');
    expect(navBarTitle).toBeInTheDocument();
  });

  it('hides NavBar component when specified', () => {
    const initialState: Partial<RootState> = {
      displayOptions: {
        showAmount: true,
        showNavBar: false,
      },
    };

    const navBar = renderWithWrapper(<NavBar />, {
      preloadedState: initialState,
    });
    expect(navBar).toMatchSnapshot();
  });
});
