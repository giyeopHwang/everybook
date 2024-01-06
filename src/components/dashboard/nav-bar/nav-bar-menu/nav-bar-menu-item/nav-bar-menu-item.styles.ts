import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const NavBarMenuItemLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  columnGap: '0.5rem',
  padding: '0 15px',
  height: '30px',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'var(--theme-light-primary-main)',
    color: 'var(--theme-light-secondary-main)',
  },
}) as typeof Link;
