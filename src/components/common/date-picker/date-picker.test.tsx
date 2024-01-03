import { fireEvent, render, screen } from '@testing-library/react';
import DatePicker from './date-picker.component';

describe('DatePicker', () => {
  it('renders DatePicker component', () => {
    const datePicker = render(<DatePicker onChange={() => {}} />);
    expect(datePicker).toMatchSnapshot();

    const resetButton = screen.getByText('초기화');
    expect(resetButton).toBeInTheDocument();
  });

  it('renders with specified date', () => {
    const datePicker = render(
      <DatePicker date={new Date('2024-01-01')} onChange={() => {}} />
    );
    expect(datePicker).toMatchSnapshot();

    const yearValue = screen.getByDisplayValue('2024');
    expect(yearValue).toBeInTheDocument();

    const monthValue = screen.getByDisplayValue('1');
    expect(monthValue).toBeInTheDocument();
  });

  it('updates and resets input values', () => {
    render(<DatePicker date={new Date('2024-01-01')} onChange={() => {}} />);

    const yearInput = screen.getByTestId('date-picker-year');
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.blur(yearInput);

    const monthInput = screen.getByTestId('date-picker-month');
    fireEvent.change(monthInput, { target: { value: '12' } });
    fireEvent.blur(monthInput);

    let yearValue = screen.getByDisplayValue('2023');
    expect(yearValue).toBeInTheDocument();

    let monthValue = screen.getByDisplayValue('12');
    expect(monthValue).toBeInTheDocument();

    const resetButton = screen.getByText('초기화');
    fireEvent.click(resetButton);

    yearValue = screen.getByDisplayValue('2024');
    expect(yearValue).toBeInTheDocument();

    monthValue = screen.getByDisplayValue('1');
    expect(monthValue).toBeInTheDocument();
  });

  it('fires callback when blurred with valid values', () => {
    const mock = vi.fn();
    render(<DatePicker onChange={mock} />);

    const yearInput = screen.getByTestId('date-picker-year');
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.blur(yearInput);

    const monthInput = screen.getByTestId('date-picker-month');
    fireEvent.change(monthInput, { target: { value: '12' } });
    fireEvent.blur(monthInput);

    expect(mock).toHaveBeenCalledWith(2023, 12);
  });

  it('does not fire callback when blurred with invalid values', () => {
    const mock = vi.fn();
    render(<DatePicker onChange={mock} />);

    const yearInput = screen.getByTestId('date-picker-year');
    fireEvent.change(yearInput, { target: { value: '3000' } });
    fireEvent.blur(yearInput);

    const monthInput = screen.getByTestId('date-picker-month');
    fireEvent.change(monthInput, { target: { value: '13' } });
    fireEvent.blur(monthInput);

    expect(mock).not.toBeCalled();
  });
});
