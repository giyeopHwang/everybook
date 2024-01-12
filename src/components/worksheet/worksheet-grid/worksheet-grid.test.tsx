import { render } from '@testing-library/react';
import WorksheetGrid from './worksheet-grid.component';
import { mockExpenseRowData, mockExpenseColDefs } from '@/data/data.mock';

describe('WorksheetGrid', () => {
  it('renders WorksheetGrid component', () => {
    const mock = vi.fn();
    const worksheetGrid = render(
      <WorksheetGrid
        rowData={mockExpenseRowData}
        colDefs={mockExpenseColDefs}
        onRowDataUpdate={mock}
      />
    );
    expect(worksheetGrid).toMatchSnapshot();
  });
});
