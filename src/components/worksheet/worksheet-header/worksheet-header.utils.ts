import dayjs from 'dayjs';

export const formatDate = (date: Date = new Date()) => {
  const day = ['일', '월', '화', '수', '목', '금', '토'][dayjs(date).day()];
  return dayjs(date).format(`YYYY년 M월 D일 (${day})`);
};
