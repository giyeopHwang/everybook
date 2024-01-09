import { ChangeEvent, useState } from 'react';
import {
  PanelToolBarItemTypes,
  TPanelToolBarItem,
} from '@/components/common/panel-tool-bar/panel-tool-bar.const';

import PanelToolBar from '@/components/common/panel-tool-bar/panel-tool-bar.component';
import ExpenseChart from '../expense-chart/expense-chart.component';
import { ExpensePanelContainer } from './expense-panel.styles';

const ExpensePanel = () => {
  const [showChart, setShowChart] = useState(true);

  const toolBarItems: TPanelToolBarItem[] = [
    {
      type: PanelToolBarItemTypes.checkbox,
      label: '그래프',
      checked: showChart,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setShowChart(e.target.checked),
    },
    // TODO : Implements click handlers
    { type: PanelToolBarItemTypes.button, label: '인쇄', onClick: console.log },
    {
      type: PanelToolBarItemTypes.button,
      label: '항목설정',
      onClick: console.log,
    },
  ];

  return (
    <ExpensePanelContainer width="100%" data-testid="worksheet-expense-panel">
      <PanelToolBar items={toolBarItems} />
      {showChart && <ExpenseChart />}
    </ExpensePanelContainer>
  );
};

export default ExpensePanel;
