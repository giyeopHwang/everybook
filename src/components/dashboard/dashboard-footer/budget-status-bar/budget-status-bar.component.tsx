import { useSelector } from 'react-redux';
import { selectDisplayOptions } from '@/store/display-options/display-options.slice';
import { displayAmount } from '@/components/utils/utils';

import ProgressBar from '@/components/common/progress-bar/progress-bar.component';
import { BudgetStatusBarContainer, Expense } from './budget-status-bar.styles';

const BudgetStatusBar = () => {
  const { showAmount } = useSelector(selectDisplayOptions);

  const budget = 5_000_000;
  const expense = 3_000_000;
  const onTrack = expense < budget;

  return (
    <BudgetStatusBarContainer>
      <span>이달의예산</span>
      <ProgressBar curr={expense} goal={budget} />
      <Expense $onTrack={onTrack}>{displayAmount(expense, showAmount)}</Expense>
      <span>/</span>
      <span>{displayAmount(budget, showAmount)}</span>
    </BudgetStatusBarContainer>
  );
};

export default BudgetStatusBar;
