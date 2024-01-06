import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const NavBarCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
  width: 100%;
  padding: 10px;
`;

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TitleGroup = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 0.3rem;
  font-size: 0.9rem;
`;

export const DetailsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  row-gap: 0.2rem;
`;

export const DetailItemContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const SubTitleGroup = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 0.3rem;
  font-size: 0.9rem;
`;
