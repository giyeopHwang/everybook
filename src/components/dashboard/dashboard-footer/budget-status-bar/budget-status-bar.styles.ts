import styled from '@emotion/styled';

type ExpenseProps = {
  $onTrack: boolean;
};

export const BudgetStatusBarContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const Expense = styled.span<ExpenseProps>`
  font-weight: bold;
  color: ${({ $onTrack }) => {
    return $onTrack
      ? 'var(--theme-dark-text-positive)'
      : 'var(--theme-dark-text-negative)';
  }};
`;
