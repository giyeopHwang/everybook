import styled from '@emotion/styled';
import { Box, Link, Typography } from '@mui/material';

export const NavBarContainer = styled(Box)`
  flex-direction: column;
  min-width: 220px;
  height: 100%;
`;

export const TitleLink = styled(Link)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  rowGap: '0.25rem',
  height: '100px',

  '&:hover': {
    color: 'var(--theme-light-secondary-main)',
  },
}) as typeof Link;

export const Title = styled(Typography)`
  font-family: 'Gowun Batang', serif;
  font-size: 1.2rem;
`;
