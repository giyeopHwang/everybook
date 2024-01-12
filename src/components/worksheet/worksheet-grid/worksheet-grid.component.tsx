import { AgGridReact } from 'ag-grid-react';
import {
  ColDef,
  GridOptions,
  CellKeyDownEvent,
  RowDataUpdatedEvent,
} from 'ag-grid-community';
import { Expense } from '@/types/types';

import { WorksheetGridContainer } from './worksheet-grid.styles';

type WorksheetGridProps<T> = {
  rowData: T[];
  colDefs: ColDef<T>[];
  onRowDataUpdate: (newRowData: T[]) => void;
};

const WorksheetGrid = ({
  rowData,
  colDefs,
  onRowDataUpdate,
}: WorksheetGridProps<Expense>) => {
  const gridOptions: GridOptions<Expense> = {
    rowSelection: 'multiple',
    rowHeight: 35,
    singleClickEdit: true,
    suppressScrollOnNewData: true,
  };

  const handleCellKeyDown = (params: CellKeyDownEvent) => {
    const event = params.event as KeyboardEvent;

    if (params.rowIndex === rowData.length - 1 && event.key === 'Enter') {
      onRowDataUpdate(rowData);
    }
  };

  const handleRowDataUpdated = (params: RowDataUpdatedEvent<Expense>) => {
    params.api.ensureIndexVisible(rowData.length - 1, 'bottom');
  };

  return (
    <WorksheetGridContainer className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact<Expense>
        rowData={rowData}
        columnDefs={colDefs}
        gridOptions={gridOptions}
        onCellKeyDown={handleCellKeyDown}
        onRowDataUpdated={handleRowDataUpdated}
      />
    </WorksheetGridContainer>
  );
};

export default WorksheetGrid;
