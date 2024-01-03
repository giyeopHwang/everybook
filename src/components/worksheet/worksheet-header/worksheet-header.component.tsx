import { formatDate } from '@/utils/utils';

import DatePicker from '@/components/common/date-picker/date-picker.component';
import { WorksheetHeaderContainer, Today } from './worksheet-header.styles';

const WorksheetHeader = () => {
  const changeDateHandler = (year: number, month: number) => {
    /* TODO: Fetch worksheeet data with given year and month */
    console.log(`Date Changed: ${year} - ${month}`);
  };

  return (
    <WorksheetHeaderContainer>
      <DatePicker onChange={changeDateHandler} />
      <Today>오늘의 날짜: {formatDate()}</Today>
    </WorksheetHeaderContainer>
  );
};

export default WorksheetHeader;
