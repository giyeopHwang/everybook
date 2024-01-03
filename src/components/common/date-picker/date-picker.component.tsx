import { useState, ChangeEvent } from 'react';
import Button from '../button/button.component';
import {
  DatePickerContainer,
  DatePickerForm,
  DateInput,
} from './date-picker.styles';

const MIN_YEAR = 1900;
const MAX_YEAR = 2100;
const MIN_MONTH = 1;
const MAX_MONTH = 12;

type DatePickerProps = {
  date?: Date;
  onChange: (year: number, month: number) => void;
};

const DatePicker = ({ date = new Date(), onChange }: DatePickerProps) => {
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [yearError, setYearError] = useState<string | null>(null);
  const [monthError, setMonthError] = useState<string | null>(null);

  const handleYearBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const newYear = +event.target.value;
    if (newYear < MIN_YEAR || newYear > MAX_YEAR) {
      setYearError('Error: Invalid Year');
      return;
    }

    setYearError(null);
    onChange(year, month);
  };

  const handleMonthBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const newMonth = +event.target.value;

    if (newMonth < MIN_MONTH || newMonth > MAX_MONTH) {
      setMonthError('Error: Invalid Month');
      return;
    }

    setMonthError(null);
    onChange(year, month);
  };

  const reset = () => {
    setYear(date.getFullYear());
    setMonth(date.getMonth() + 1);
    onChange(date.getFullYear(), date.getMonth() + 1);
  };

  return (
    <DatePickerContainer>
      <DatePickerForm>
        <DateInput
          type="input"
          min={MIN_YEAR}
          max={MAX_YEAR}
          step="1"
          name="year"
          value={year}
          onChange={(e) => setYear(+e.target.value)}
          onBlur={handleYearBlur}
          data-testId="date-picker-year"
          $error={yearError}
        />
        <label htmlFor="year">년</label>
        <DateInput
          type="input"
          min={MIN_MONTH}
          max={MAX_MONTH}
          step="1"
          name="month"
          value={month}
          onChange={(e) => setMonth(+e.target.value)}
          onBlur={handleMonthBlur}
          data-testId="date-picker-month"
          $error={monthError}
        />
        <label htmlFor="month">월</label>
        <Button onClick={reset}>초기화</Button>
      </DatePickerForm>
    </DatePickerContainer>
  );
};

export default DatePicker;
