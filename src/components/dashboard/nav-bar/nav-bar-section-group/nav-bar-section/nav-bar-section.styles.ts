import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const NavBarSectionContainer = styled(Box)`
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  font-size: 0.9rem;
`;

export const HeaderContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  row-gap: 0.15rem;
  margin-bottom: 0.5rem;
`;

export const TitleContainer = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 0.25rem;

  &:hover {
    cursor: pointer;
    color: var(--theme-dark-text-highlight);
  }
`;

export const SubTitle = styled(Typography)`
  margin-left: 1.75rem;
`;
