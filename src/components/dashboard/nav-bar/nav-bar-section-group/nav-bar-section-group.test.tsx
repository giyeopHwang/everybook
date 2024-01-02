import { renderWithWrapper } from '@/test/test-utils';
import NavBarSectionGroup from './nav-bar-section-group.component';

describe('NavBarSectionGroup', () => {
  it('renders NavBarSectionGroup component', () => {
    const navBarSectionGroup = renderWithWrapper(<NavBarSectionGroup />);
    expect(navBarSectionGroup).toMatchSnapshot();
  });
});
