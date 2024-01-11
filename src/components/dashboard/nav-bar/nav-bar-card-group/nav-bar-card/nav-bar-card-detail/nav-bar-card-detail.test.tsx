import { renderWithWrapper } from '@/test/test.utils';
import { RootState } from '@/store/store';
import { mockPlus } from '@/test/test.mock';
import NavBarCardDetails from './nav-bar-card-detail.component';

describe('NavBarCardDetails', () => {
  it('renders NavBarCardDetails component', () => {
    const navBarCardDetails = renderWithWrapper(
      <NavBarCardDetails details={mockPlus.details} />
    );

    expect(navBarCardDetails).toMatchSnapshot();
  });

  it('renders with hidden amount', () => {
    const initialState: Partial<RootState> = {
      displayOptions: {
        showAmount: false,
        showNavBar: true,
      },
    };

    const navBarCard = renderWithWrapper(
      <NavBarCardDetails details={mockPlus.details} />,
      { preloadedState: initialState }
    );

    expect(navBarCard).toMatchSnapshot();
  });
});
