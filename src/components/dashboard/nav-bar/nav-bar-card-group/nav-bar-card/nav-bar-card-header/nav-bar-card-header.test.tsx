import { renderWithWrapper } from '@/test/test.utils';
import { RootState } from '@/store/store';
import { mockNet, mockPlus, mockMinus } from '@/test/test.mock';
import NavBarCardHeader from './nav-bar-card-header.component';

describe('NavBarCardHeader', () => {
  it('renders net-typed NavBarCardHeader component', () => {
    const { title, amount, type } = mockNet;
    const navBarCardHeader = renderWithWrapper(
      <NavBarCardHeader title={title} amount={amount} type={type} />
    );

    expect(navBarCardHeader).toMatchSnapshot();
  });

  it('renders plus-typed NavBarCardHeader component', () => {
    const { title, amount, type } = mockPlus;
    const navBarCardHeader = renderWithWrapper(
      <NavBarCardHeader title={title} amount={amount} type={type} />
    );

    expect(navBarCardHeader).toMatchSnapshot();
  });

  it('renders minus-typed NavBarCardHeader component', () => {
    const { title, amount, type } = mockMinus;
    const navBarCardHeader = renderWithWrapper(
      <NavBarCardHeader title={title} amount={amount} type={type} />
    );

    expect(navBarCardHeader).toMatchSnapshot();
  });

  it('renders with hidden amount', () => {
    const { title, amount, type } = mockNet;
    const initialState: Partial<RootState> = {
      displayOptions: {
        showAmount: false,
        showNavBar: true,
      },
    };

    const navBarCard = renderWithWrapper(
      <NavBarCardHeader title={title} amount={amount} type={type} />,
      { preloadedState: initialState }
    );

    expect(navBarCard).toMatchSnapshot();
  });
});
