import { fireEvent, screen } from '@testing-library/react';
import { renderWithWrapper } from '@/test/test-utils';
import { RootState } from '@/store/store';
import DashboardHeader from './dashboard-header.component';

describe('DashboardHeader', () => {
  it('renders DashboardHeader component', () => {
    const dashboardHeader = renderWithWrapper(<DashboardHeader />);
    expect(dashboardHeader).toMatchSnapshot();

    const { store } = dashboardHeader;
    const displayOptions = store.getState().displayOptions;
    expect(displayOptions).toEqual({
      showAmount: true,
      showNavBar: true,
    });

    const title = screen.getByText('가계부');
    expect(title).toBeInTheDocument();

    const hideAmountButton = screen.getByText('금액감추기');
    expect(hideAmountButton).toBeInTheDocument();
  });

  it('renders with hidden amount', () => {
    const initialState: Partial<RootState> = {
      displayOptions: {
        showAmount: false,
        showNavBar: true,
      },
    };

    const dashboardHeader = renderWithWrapper(<DashboardHeader />, {
      preloadedState: initialState,
    });
    expect(dashboardHeader).toMatchSnapshot();
  });

  it('renders with hidden nav bar', () => {
    const initialState: Partial<RootState> = {
      displayOptions: {
        showAmount: true,
        showNavBar: false,
      },
    };

    const dashboardHeader = renderWithWrapper(<DashboardHeader />, {
      preloadedState: initialState,
    });
    expect(dashboardHeader).toMatchSnapshot();
  });

  it('renders with hidden amount and hidden nav bar', () => {
    const initialState: Partial<RootState> = {
      displayOptions: {
        showAmount: false,
        showNavBar: false,
      },
    };

    const dashboardHeader = renderWithWrapper(<DashboardHeader />, {
      preloadedState: initialState,
    });
    expect(dashboardHeader).toMatchSnapshot();
  });

  it('toggles showNavBar state when NavBar collapse button or NavBar expand button clicked', () => {
    let showNavBar;
    const { store } = renderWithWrapper(<DashboardHeader />);
    showNavBar = store.getState().displayOptions.showNavBar;
    expect(showNavBar).toBeTruthy();

    const collapseButton = screen.getByTestId('nav-bar-collapse-button');
    expect(collapseButton).toBeInTheDocument();

    fireEvent.click(collapseButton);
    showNavBar = store.getState().displayOptions.showNavBar;
    expect(showNavBar).toBeFalsy();

    const expandButton = screen.getByTestId('nav-bar-expand-button');
    expect(expandButton).toBeInTheDocument();

    fireEvent.click(expandButton);
    showNavBar = store.getState().displayOptions.showNavBar;
    expect(showNavBar).toBeTruthy();
  });

  it('toggles showAmount state when `금액감추기` button clicked', () => {
    let showAmount;
    const { store } = renderWithWrapper(<DashboardHeader />);
    showAmount = store.getState().displayOptions.showAmount;
    expect(showAmount).toBeTruthy();

    const hideAmountButton = screen.getByText('금액감추기');
    fireEvent.click(hideAmountButton);
    showAmount = store.getState().displayOptions.showAmount;
    expect(showAmount).toBeFalsy();
  });
});
