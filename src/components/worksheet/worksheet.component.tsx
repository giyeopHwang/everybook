import { ChangeEvent, useState } from 'react';
import { TTabMenuItem } from '../common/tab-menu-bar/tab-menu-items/tab-menu-items.const';

import WorksheetHeader from './worksheet-header/worksheet-header.component';
import TabMenuBar from '../common/tab-menu-bar/tab-menu-bar.component';
import { WorksheetContainer } from './worksheet.styles';
import {
  TTabToolItem,
  TabToolItemTypes,
} from '../common/tab-menu-bar/tab-tool-items/tab-tool-items.const';

const Worksheet = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showGraph, setShowGraph] = useState(true);

  const worksheetTabMenuItems: TTabMenuItem[] = [
    { label: '지출' },
    { label: '수익' },
  ];

  const worksheetTabToolItems: TTabToolItem[] = [
    {
      type: TabToolItemTypes.checkbox,
      label: '그래프',
      checked: showGraph,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setShowGraph(e.target.checked),
    },
    // TODO : Implements click handlers
    { type: TabToolItemTypes.button, label: '인쇄', onClick: console.log },
    { type: TabToolItemTypes.button, label: '항목설정', onClick: console.log },
  ];

  return (
    <WorksheetContainer component="article">
      <WorksheetHeader />
      <TabMenuBar
        menuItems={worksheetTabMenuItems}
        toolItems={worksheetTabToolItems}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </WorksheetContainer>
  );
};

export default Worksheet;
