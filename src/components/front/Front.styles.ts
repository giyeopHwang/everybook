import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const FrontContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  height: 100vh;
`;

export const Title = styled(Typography)`
  font-family: 'Gowun Batang', serif;
  font-weight: 300;
  font-size: 2rem;
`;
