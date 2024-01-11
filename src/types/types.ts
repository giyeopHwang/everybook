export type ExpenseCategories =
  | '식비'
  | '주거/통신'
  | '생활용품'
  | '의복/미용'
  | '건강/문화'
  | '교육/육아'
  | '교통/차량'
  | '경조사/회비'
  | '세금/이자'
  | '용돈/기타'
  | '미분류';

export type Expense = {
  id: string;
  isSelected?: boolean;
  date: Date;
  place: string;
  item: string;
  cash?: number;
  card?: number;
  cashAccount?: string | null;
  cardAccount?: string | null;
  category?: string;
  isWaste?: boolean;
};
