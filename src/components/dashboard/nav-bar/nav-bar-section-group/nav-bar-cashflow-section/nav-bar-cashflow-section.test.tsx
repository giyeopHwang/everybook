import { renderWithWrapper } from '@/test/test-utils';
import NavBarCashFlowSection from './nav-bar-cashflow-section.component';

describe('NavBarCashFlowSection', () => {
  it('renders NavBarCashFlowSection component', () => {
    const navBarCashFlowSection = renderWithWrapper(<NavBarCashFlowSection />);
    expect(navBarCashFlowSection).toMatchSnapshot();
  });
});
