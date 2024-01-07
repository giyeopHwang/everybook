import { fireEvent, render, screen } from '@testing-library/react';
import { mockTabMenuItems } from '@/test/test-mock';
import TabMenuItems from './tab-menu-items.component';

describe('TabMenuItems', () => {
  it('renders TabMenuItems component', () => {
    const tabMenuItems = render(
      <TabMenuItems
        menuItems={mockTabMenuItems}
        selectedTab={0}
        setSelectedTab={() => {}}
      />
    );

    expect(tabMenuItems).toMatchSnapshot();

    const tab1 = screen.getByText('TAB_1');
    const tab2 = screen.getByText('TAB_2');
    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
  });

  it('fires callback when a different tab selected', () => {
    const mock = vi.fn();

    render(
      <TabMenuItems
        menuItems={mockTabMenuItems}
        selectedTab={0}
        setSelectedTab={mock}
      />
    );

    const tab2 = screen.getByText('TAB_2');
    fireEvent.click(tab2);

    expect(mock).toHaveBeenCalledOnce();
  });
});
