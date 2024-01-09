import { useState } from 'react';
import { TTabMenuItem } from '../common/tab-menu-bar/tab-menu-items/tab-menu-items.const';

import WorksheetHeader from './worksheet-header/worksheet-header.component';
import TabMenuBar from '../common/tab-menu-bar/tab-menu-bar.component';
import ExpensePanel from './expense-panel/expense-panel.component';
import { WorksheetContainer } from './worksheet.styles';

const Worksheet = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const worksheetTabMenuItems: TTabMenuItem[] = [
    { label: '지출' },
    { label: '수익' },
  ];

  return (
    <WorksheetContainer component="article">
      <WorksheetHeader />
      <TabMenuBar
        menuItems={worksheetTabMenuItems}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === 0 && <ExpensePanel />}
    </WorksheetContainer>
  );
};

export default Worksheet;
