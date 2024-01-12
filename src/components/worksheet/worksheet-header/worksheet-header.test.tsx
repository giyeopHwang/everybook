import { screen } from '@testing-library/react';
import MockDate from 'mockdate';
import { renderWithWrapper } from '@/test/test.utils';

import WorksheetHeader from './worksheet-header.component';
import { formatDate } from './worksheet-header.utils';

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

describe('formatDate()', () => {
  it('formats a date', () => {
    expect(formatDate(new Date('2023-12-31'))).toBe('2023년 12월 31일 (일)');
    expect(formatDate(new Date('2024-01-01'))).toBe('2024년 1월 1일 (월)');
  });
});
