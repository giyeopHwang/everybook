import { useDisplayOptions } from '@/data/context/display-options-context';

import ProgressBar from '@/components/common/progress-bar/progress-bar.component';
import { BudgetStatusBarContainer, Expense } from './budget-status-bar.styles';

const amountPlaceholder = '*********';

const BudgetStatusBar = () => {
  const { showAmount } = useDisplayOptions();

  const budget = 5_000_000;
  const expense = 3_000_000;

  const onTrack = expense < budget;

  return (
    <BudgetStatusBarContainer>
      <span>이달의예산</span>
      <ProgressBar curr={expense} goal={budget} />
      <Expense $onTrack={onTrack}>
        {showAmount ? expense.toLocaleString() : amountPlaceholder}
      </Expense>
      <span>/</span>
      <span>{showAmount ? budget.toLocaleString() : amountPlaceholder}</span>
    </BudgetStatusBarContainer>
  );
};

export default BudgetStatusBar;
