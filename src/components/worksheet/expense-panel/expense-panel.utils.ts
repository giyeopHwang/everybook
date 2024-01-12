import { SuppressKeyboardEventParams } from 'ag-grid-community';
import { Expense } from '@/types/types';

export const suppressKeyboardEvent = (params: SuppressKeyboardEventParams) => {
  const event = params.event;

  // This would prevent double tabbing issue when the input is written in Korean.
  return event.key === 'Tab' && event.isComposing;
};

export const generateNewExpenseInputRow: () => Expense = () => ({
  id: crypto.randomUUID(),
  isSelected: false,
  place: '',
  item: '',
  date: new Date(),
  isWaste: false,
});
