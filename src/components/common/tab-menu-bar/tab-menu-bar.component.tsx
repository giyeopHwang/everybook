import TabMenuItems from './tab-menu-items/tab-menu-items.component';
import TabToolItems from './tab-tool-items/tab-tool-items.component';
import { TabMenuBarContainer } from './tab-menu-bar.styles';
import { TTabMenuItem } from './tab-menu-items/tab-menu-items.const';
import { TTabToolItem } from './tab-tool-items/tab-tool-items.const';

type TabMenuBarProps = {
  menuItems: TTabMenuItem[];
  toolItems?: TTabToolItem[];
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
};

const TabMenuBar = ({
  menuItems,
  toolItems = [],
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
      {toolItems.length !== 0 && <TabToolItems toolItems={toolItems} />}
    </TabMenuBarContainer>
  );
};

export default TabMenuBar;
