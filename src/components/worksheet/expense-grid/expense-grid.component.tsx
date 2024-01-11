import { useCallback, useState } from 'react';
import dayjs from 'dayjs';
import { AgGridReact } from 'ag-grid-react';
import {
  ColDef,
  GridOptions,
  SuppressKeyboardEventParams,
  CellKeyDownEvent,
  RowDataUpdatedEvent,
} from 'ag-grid-community';
import { Expense } from '@/types/types';
import { mockExpenseData } from '@/data/data.mock';

import { ExpenseGridContainer } from './expense-grid.styles';

const ExpenseGrid = () => {
  const generateNewInputRow: () => Expense = useCallback(
    () => ({
      id: crypto.randomUUID(),
      isSelected: false,
      place: '',
      item: '',
      date: new Date(),
      isWaste: false,
    }),
    []
  );

  const suppressKeyboardEvent = useCallback(
    (params: SuppressKeyboardEventParams<Expense>) => {
      const event = params.event;

      // This would prevent double tabbing issue when the input is written in Korean.
      if (event.key === 'Tab') {
        if (event.isComposing) {
          return true;
        }
      }

      return false;
    },
    []
  );

  const [rowData, setRowData] = useState<Expense[]>([
    ...mockExpenseData,
    generateNewInputRow(),
  ]);

  const colDefs: ColDef<Expense>[] = [
    { field: 'isSelected', headerName: '선택', editable: true, flex: 0.5 },
    {
      field: 'date',
      headerName: '날짜',
      editable: true,
      valueFormatter: (params) => `${dayjs(params.value).format('YYYY.MM.DD')}`,
      flex: 0.75,
    },
    {
      field: 'place',
      headerName: '사용처',
      editable: true,
      suppressKeyboardEvent,
      flex: 1,
    },
    {
      field: 'item',
      headerName: '사용내역',
      editable: true,
      suppressKeyboardEvent,
      flex: 1,
    },
    {
      field: 'cash',
      headerName: '현금',
      editable: true,
      valueFormatter: (params) =>
        params.value && `₩${params.value.toLocaleString()}`,
      flex: 1,
    },
    {
      field: 'card',
      headerName: '카드',
      editable: true,
      valueFormatter: (params) =>
        params.value && `₩${params.value.toLocaleString()}`,
      flex: 1,
    },
    {
      field: 'cashAccount',
      headerName: '출금통장',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['선택없음', '하나주거래통장', '네이버페이머니통장', 'PAYCO'],
      },
      valueSetter: (params) => {
        params.data.cashAccount =
          params.newValue === '선택없음' ? null : params.newValue;
        return true;
      },
      flex: 1,
    },
    {
      field: 'cardAccount',
      headerName: '카드분류',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: [
          '선택없음',
          '네이버페이체크카드',
          '톡톡 my point 카드',
          '현대카드ZERO',
        ],
      },
      valueSetter: (params) => {
        params.data.cardAccount =
          params.newValue === '선택없음' ? null : params.newValue;
        return true;
      },
      flex: 1,
    },
    { field: 'category', headerName: '분류', editable: true, flex: 1 },
    {
      field: 'isWaste',
      headerName: '낭비',
      editable: true,
      flex: 0.5,
    },
  ];

  const gridOptions: GridOptions<Expense> = {
    rowSelection: 'multiple',
    rowHeight: 35,
    singleClickEdit: true,
    suppressScrollOnNewData: true,
  };

  const handleCellKeyDown = (params: CellKeyDownEvent<Expense>) => {
    const event = params.event as KeyboardEvent;

    if (params.rowIndex === rowData.length - 1 && event.key === 'Enter') {
      setRowData([...rowData, generateNewInputRow()]);
    }
  };

  const handleRowDataUpdated = (params: RowDataUpdatedEvent<Expense>) => {
    params.api.ensureIndexVisible(rowData.length - 1, 'bottom');
  };

  return (
    <ExpenseGridContainer className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact<Expense>
        rowData={rowData}
        columnDefs={colDefs}
        gridOptions={gridOptions}
        onCellKeyDown={handleCellKeyDown}
        onRowDataUpdated={handleRowDataUpdated}
      />
    </ExpenseGridContainer>
  );
};

export default ExpenseGrid;
