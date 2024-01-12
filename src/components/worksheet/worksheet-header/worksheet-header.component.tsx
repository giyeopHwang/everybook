import dayjs from 'dayjs';
import { formatDate } from './worksheet-header.utils';

import { DatePicker } from '@mui/x-date-pickers';
import { WorksheetHeaderContainer, Today } from './worksheet-header.styles';

const WorksheetHeader = () => {
  const acceptHandler = (date: dayjs.Dayjs | null) => {
    if (date === null) {
      return;
    }

    /* TODO: Fetch worksheeet data with given year and month */
    console.log(`${date.year()}년 ${date.month() + 1}월`);
  };

  return (
    <WorksheetHeaderContainer component="header">
      <DatePicker
        format="YYYY년 M월"
        views={['year', 'month']}
        defaultValue={dayjs()}
        onAccept={acceptHandler}
      />
      <Today variant="body2" color="text.secondary">
        오늘의 날짜: {formatDate()}
      </Today>
    </WorksheetHeaderContainer>
  );
};

export default WorksheetHeader;
