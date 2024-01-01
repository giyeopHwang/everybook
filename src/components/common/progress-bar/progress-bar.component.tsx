import { ProgressTypes } from './progress-bar.const';
import { ProgressBarContainer, Progress } from './progress-bar.styles';

type ProgressBarProps = {
  curr: number;
  goal: number;
  type: ProgressTypes;
};

const ProgressBar = ({
  type = ProgressTypes.normal,
  curr,
  goal,
}: ProgressBarProps) => {
  return (
    <ProgressBarContainer>
      <Progress $type={type} $curr={curr} $goal={goal} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
