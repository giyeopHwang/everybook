import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const DashboardLayoutContainer = styled(Box)`
  display: flex;
  overflow: hidden;
  height: calc(100vh - 30px);
  margin-bottom: 30px;
`;

export const DashboardContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
