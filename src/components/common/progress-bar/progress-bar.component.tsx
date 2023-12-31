import { ProgressBarContainer, Progress } from './progress-bar.styles';

type ProgressBarProps = {
  curr: number;
  goal: number;
};

const ProgressBar = ({ curr, goal }: ProgressBarProps) => {
  return (
    <ProgressBarContainer>
      <Progress $curr={curr} $goal={goal} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
