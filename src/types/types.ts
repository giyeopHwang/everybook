export enum Currency {
  KRW,
}

export type Expense = {
  id: string;
  isSelected?: boolean;
  date: Date;
  place: string;
  item: string;
  cash?: number;
  cashCurrency?: Currency;
  card?: number;
  cardCurrency?: Currency;
  cashAccount?: string | null;
  cardAccount?: string | null;
  category?: string;
  subCategory?: string;
  isWaste?: boolean;
};
