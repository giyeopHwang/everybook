import { TTabMenuItem } from './tab-menu-items.const';
import { TabMenuItem, TabMenuItemsContainer } from './tab-menu-items.styles';

type TabMenuItemsPros = {
  menuItems: TTabMenuItem[];
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
};

const TabMenuItems = ({
  menuItems,
  selectedTab,
  setSelectedTab,
}: TabMenuItemsPros) => {
  const handlechange = (_: React.SyntheticEvent, selectedTab: number) => {
    setSelectedTab(selectedTab);
  };

  return (
    <TabMenuItemsContainer
      value={selectedTab}
      onChange={handlechange}
      textColor="inherit"
    >
      {menuItems.map(({ label }) => (
        <TabMenuItem key={label} label={label} />
      ))}
    </TabMenuItemsContainer>
  );
};

export default TabMenuItems;
