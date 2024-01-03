export const displayAmount = (
  amount: number,
  showAmount: boolean = true,
  placeholder: string = '*********'
) => {
  return showAmount ? amount.toLocaleString() : placeholder;
};

export const formatDate = (date: Date = new Date()) => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  return `${new Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'long',
  }).format(date)} (${days[date.getDay()]})`;
};
