import { useSelector } from 'react-redux';
import { selectDisplayOptions } from '@/store/display-options/display-options-slice';
import { displayAmount } from '@/utils/utils';

import { Typography } from '@mui/material';
import {
  BudgetStatusBarContainer,
  Expense,
  ProgressBar,
} from './budget-status-bar.styles';

const BudgetStatusBar = () => {
  const { showAmount } = useSelector(selectDisplayOptions);

  const budget = 5_000_000;
  const expense = 3_000_000;
  const onTrack = expense < budget;
  const progress = Math.min((expense / budget) * 100, 100);

  return (
    <BudgetStatusBarContainer>
      <Typography variant="caption">이달의예산</Typography>
      <ProgressBar
        variant="determinate"
        color={onTrack ? 'success' : 'error'}
        value={progress}
      />
      <Expense
        variant="caption"
        color={onTrack ? 'success.main' : 'error.main'}
      >
        {displayAmount(expense, showAmount)}
      </Expense>
      <Typography variant="caption">/</Typography>
      <Typography variant="caption">
        {displayAmount(budget, showAmount)}
      </Typography>
    </BudgetStatusBarContainer>
  );
};

export default BudgetStatusBar;
