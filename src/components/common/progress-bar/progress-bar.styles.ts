import styled from '@emotion/styled';
import { ProgressTypes } from './progress-bar.const';

type Progress = {
  $type: ProgressTypes;
  $curr: number;
  $goal: number;
};

export const ProgressBarContainer = styled.div`
  display: flex;
  width: 65px;
  height: 4px;
  border-radius: 2px;
  background-color: var(--theme-dark-text-subsidary);
`;

export const Progress = styled.div<Progress>`
  position: relative;
  width: ${({ $curr, $goal }) =>
    $curr < $goal ? `${($curr / $goal) * 100}%` : '100%'};
  height: 4px;
  border-radius: 2px;
  background-color: ${({ $type, $curr, $goal }) => {
    switch ($type) {
      case ProgressTypes.budget:
        return $curr < $goal
          ? 'var(--theme-dark-text-positive)'
          : 'var(--theme-dark-text-negative)';
      case ProgressTypes.normal:
      default:
        return 'var(--theme-dark-text-positive)';
    }
  }};
`;
