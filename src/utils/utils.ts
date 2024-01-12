export const displayAmount = (
  amount: number,
  showAmount: boolean = true,
  placeholder: string = '*********'
) => {
  return showAmount ? amount.toLocaleString() : placeholder;
};
