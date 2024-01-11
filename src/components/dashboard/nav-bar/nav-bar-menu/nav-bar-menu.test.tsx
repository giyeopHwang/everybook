import { screen } from '@testing-library/react';
import { renderWithWrapper } from '@/test/test.utils';
import NavBarMenu from './nav-bar-menu.component';

describe('NavBarMenu', () => {
  it('renders NavBarMenu component', () => {
    const navBarMenu = renderWithWrapper(<NavBarMenu />);
    expect(navBarMenu).toMatchSnapshot();
  });

  it('includes four menu items', () => {
    const menuItems = ['가계부', '보고서', '예산 관리', '분류 관리'];
    renderWithWrapper(<NavBarMenu />);

    menuItems.forEach((menuItem) => {
      expect(screen.getByText(menuItem)).toBeInTheDocument();
    });
  });
});
