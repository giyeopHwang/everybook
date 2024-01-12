export const formatTick = (amount: number) => {
  if (amount >= 100_000_000) {
    return (amount / 100_000_000).toLocaleString() + '억';
  }

  if (amount >= 10_000) {
    return (amount / 10_000).toLocaleString() + '만';
  }

  return amount.toLocaleString();
};
