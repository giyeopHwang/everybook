import styled from 'styled-components';

type Progress = {
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
  background-color: ${({ $curr, $goal }) =>
    $curr < $goal
      ? 'var(--theme-dark-text-positive)'
      : 'var(--theme-dark-text-negative)'};
`;
