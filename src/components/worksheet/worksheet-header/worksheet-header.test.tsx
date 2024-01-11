import { screen } from '@testing-library/react';
import MockDate from 'mockdate';
import { renderWithWrapper } from '@/test/test.utils';
import WorksheetHeader from './worksheet-header.component';

describe('WorksheetHeader', () => {
  beforeEach(() => {
    MockDate.set('2024-01-01');
  });

  afterEach(() => {
    MockDate.reset();
  });

  it('renders WorksheetHeader component', () => {
    const worksheetHeader = renderWithWrapper(<WorksheetHeader />);
    expect(worksheetHeader).toMatchSnapshot();

    const datePicker = screen.getByDisplayValue('2024년 01월');
    expect(datePicker).toBeInTheDocument();

    const today = screen.getByText('오늘의 날짜: 2024년 1월 1일 (월)');
    expect(today).toBeInTheDocument();
  });
});
