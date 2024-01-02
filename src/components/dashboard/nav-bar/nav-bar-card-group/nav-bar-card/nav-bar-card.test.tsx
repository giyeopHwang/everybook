import { renderWithWrapper } from '@/test/test-utils';
import NavBarCard from './nav-bar-card.component';
import { mockNet, mockPlus } from '@/test/test-mock';

describe('NavBarCard', () => {
  describe('without details prop', () => {
    it('renders NavBarCard component', () => {
      const { title, amount, type } = mockNet;
      const navBarCard = renderWithWrapper(
        <NavBarCard title={title} amount={amount} type={type} />
      );

      expect(navBarCard).toMatchSnapshot();
    });

    it('renders collapsed when specified', () => {
      const { title, amount, type } = mockNet;
      const navBarCard = renderWithWrapper(
        <NavBarCard
          title={title}
          amount={amount}
          type={type}
          expanded={false}
        />
      );

      expect(navBarCard).toMatchSnapshot();
    });
  });

  describe('with details prop', () => {
    it('renders NavBarCard component', () => {
      const { title, amount, type, details } = mockPlus;
      const navBarCard = renderWithWrapper(
        <NavBarCard
          title={title}
          amount={amount}
          type={type}
          details={details}
        />
      );

      expect(navBarCard).toMatchSnapshot();
    });

    it('renders collapsed when specified', () => {
      const { title, amount, type, details } = mockPlus;
      const navBarCard = renderWithWrapper(
        <NavBarCard
          title={title}
          amount={amount}
          type={type}
          details={details}
          expanded={false}
        />
      );

      expect(navBarCard).toMatchSnapshot();
    });
  });
});
