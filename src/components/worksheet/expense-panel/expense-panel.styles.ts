import styled from '@emotion/styled';
import { Box, ButtonGroup } from '@mui/material';

export const ExpensePanelContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ButtonsContainer = styled(ButtonGroup)`
  display: flex;
  align-items: center;
`;

export const SummaryContainer = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const SummaryItem = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;
