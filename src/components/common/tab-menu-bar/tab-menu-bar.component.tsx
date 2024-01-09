import TabMenuItems from './tab-menu-items/tab-menu-items.component';
import { TabMenuBarContainer } from './tab-menu-bar.styles';
import { TTabMenuItem } from './tab-menu-items/tab-menu-items.const';

type TabMenuBarProps = {
  menuItems: TTabMenuItem[];
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
};

const TabMenuBar = ({
  menuItems,
  selectedTab = 0,
  setSelectedTab,
}: TabMenuBarProps) => {
  return (
    <TabMenuBarContainer>
      <TabMenuItems
        menuItems={menuItems}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </TabMenuBarContainer>
  );
};

export default TabMenuBar;
