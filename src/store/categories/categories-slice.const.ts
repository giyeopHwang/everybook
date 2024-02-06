export type ExpenseCategory = {
  id: string;
  name: string;
};

export type CategoriesState = {
  expenseCategories: ExpenseCategory[];
};
