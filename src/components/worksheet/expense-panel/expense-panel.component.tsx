import { useState, ChangeEvent } from 'react';
import {
  PanelToolBarItemTypes,
  TPanelToolBarItem,
} from '@/components/common/panel-tool-bar/panel-tool-bar.const';
import { Expense } from '@/types/types';
import { mockExpenseRowData, mockExpenseColDefs } from '@/data/data.mock';
import { generateNewExpenseInputRow } from '@/utils/utils';

import PanelToolBar from '@/components/common/panel-tool-bar/panel-tool-bar.component';
import ExpenseChart from '../expense-chart/expense-chart.component';
import ExpenseGrid from '../worksheet-grid/worksheet-grid.component';
import {
  ButtonsContainer,
  ExpensePanelContainer,
  SummaryContainer,
  SummaryItem,
} from './expense-panel.styles';
import PanelFooter from '@/components/common/panel-footer/panel-footer.component';
import { Button, Divider, Typography } from '@mui/material';

const ExpensePanel = () => {
  const [showChart, setShowChart] = useState(true);

  const [expenseRowData, setExpenseRowData] = useState([
    ...mockExpenseRowData,
    generateNewExpenseInputRow(),
  ]);

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

  const cashExpense = 600_000;
  const cardExpense = 400_000;
  const totalExpense = cashExpense + cardExpense;

  const handleNewExpenseRowData = (expenseRow: Expense[]) => {
    setExpenseRowData([...expenseRow, generateNewExpenseInputRow()]);
  };

  return (
    <ExpensePanelContainer width="100%" data-testid="worksheet-expense-panel">
      <PanelToolBar items={toolBarItems} />
      {showChart && <ExpenseChart />}
      <ExpenseGrid
        rowData={expenseRowData}
        colDefs={mockExpenseColDefs}
        onRowDataUpdate={handleNewExpenseRowData}
      />
      <PanelFooter>
        <ButtonsContainer variant="outlined" size="small">
          <Button>선택삭제</Button>
          <Button>선택복사</Button>
        </ButtonsContainer>
        <SummaryContainer>
          <Divider orientation="vertical" flexItem />
          <SummaryItem>
            <Typography variant="body2">현금지출</Typography>
            <Typography variant="body1" fontWeight="700">
              {cashExpense.toLocaleString()}
            </Typography>
          </SummaryItem>
          <SummaryItem>
            <Typography variant="body2">카드지출</Typography>
            <Typography variant="body1" fontWeight="700">
              {cardExpense.toLocaleString()}
            </Typography>
          </SummaryItem>
          <Divider orientation="vertical" flexItem />
          <SummaryItem>
            <Typography variant="body2">지출합계</Typography>
            <Typography variant="h6" color="success.main" fontWeight="700">
              {totalExpense.toLocaleString()}
            </Typography>
          </SummaryItem>
          <Button variant="contained" color="success">
            저장하기
          </Button>
        </SummaryContainer>
      </PanelFooter>
    </ExpensePanelContainer>
  );
};

export default ExpensePanel;
