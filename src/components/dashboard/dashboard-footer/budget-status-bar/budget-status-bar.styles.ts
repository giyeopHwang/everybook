import styled from '@emotion/styled';
import { Box, LinearProgress, Typography } from '@mui/material';

export const BudgetStatusBarContainer = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
`;

export const ProgressBar = styled(LinearProgress)`
  width: 65px;
  height: 4px;
`;

export const Expense = styled(Typography)`
  font-weight: bold;
`;
