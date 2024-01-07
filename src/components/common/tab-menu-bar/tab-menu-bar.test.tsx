import { render } from '@testing-library/react';
import { mockTabMenuItems, mockTabToolItems } from '@/test/test-mock';
import TabMenuBar from './tab-menu-bar.component';

describe('TabMenuBar', () => {
  it('renders TabMenuBar component without tool items', () => {
    const tabMenuBar = render(
      <TabMenuBar
        menuItems={mockTabMenuItems}
        selectedTab={0}
        setSelectedTab={() => {}}
      />
    );
    expect(tabMenuBar).toMatchSnapshot();
  });

  it('renders TabMenuBar component with tool items', () => {
    const tabMenuBar = render(
      <TabMenuBar
        menuItems={mockTabMenuItems}
        toolItems={mockTabToolItems}
        selectedTab={0}
        setSelectedTab={() => {}}
      />
    );
    expect(tabMenuBar).toMatchSnapshot();
  });
});
