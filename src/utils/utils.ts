import dayjs from 'dayjs';
import { SuppressKeyboardEventParams } from 'ag-grid-community';
import { Expense } from '@/types/types';

export const displayAmount = (
  amount: number,
  showAmount: boolean = true,
  placeholder: string = '*********'
) => {
  return showAmount ? amount.toLocaleString() : placeholder;
};

export const formatDate = (date: Date = new Date()) => {
  const day = ['일', '월', '화', '수', '목', '금', '토'][dayjs(date).day()];
  return dayjs(date).format(`YYYY년 M월 D일 (${day})`);
};

export const formatTick = (amount: number) => {
  if (amount >= 100_000_000) {
    return (amount / 100_000_000).toLocaleString() + '억';
  }

  if (amount >= 10_000) {
    return (amount / 10_000).toLocaleString() + '만';
  }

  return amount.toLocaleString();
};

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
