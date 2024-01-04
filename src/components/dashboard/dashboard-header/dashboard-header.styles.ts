import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

export const DashboardHeaderContainer = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--theme-light-border);
  height: 50px;
`;

export const TitleGroup = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const Title = styled(Typography)`
  font-size: 1rem;
  font-weight: normal;
`;

const NavBarToggleButton = styled(Button)`
  position: absolute;
  border-radius: 0;
  padding: 0;
  min-width: 0.75rem;
  max-width: 0.75rem;
  height: 50px;
`;

export const NavBarCollapseButton = styled(NavBarToggleButton)`
  left: -0.75rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const NavBarExpandButton = styled(NavBarToggleButton)`
  left: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
