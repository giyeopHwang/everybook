import { renderWithWrapper } from '@/test/test-utils';
import NavBarMenuItem from './nav-bar-menu-item.component';

describe('NavBarMenuItem', () => {
  it('renders NavBarMenuItem component', () => {
    const navBarMenuItem = renderWithWrapper(
      <NavBarMenuItem href="/">ITEM</NavBarMenuItem>
    );

    expect(navBarMenuItem).toMatchSnapshot();
  });
});
