import WorksheetHeader from './worksheet-header/worksheet-header.component';
import { WorksheetContainer } from './worksheet.styles';

const Worksheet = () => {
  return (
    <WorksheetContainer component="article">
      <WorksheetHeader />
    </WorksheetContainer>
  );
};

export default Worksheet;
