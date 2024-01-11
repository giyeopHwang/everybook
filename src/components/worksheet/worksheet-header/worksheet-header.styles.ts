import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const WorksheetHeaderContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.5rem;
  width: 100%;
  min-height: 110px;
`;

export const Today = styled(Typography)`
  position: absolute;
  z-index: 1;
  top: 0.5rem;
  right: 0.5rem;
`;
