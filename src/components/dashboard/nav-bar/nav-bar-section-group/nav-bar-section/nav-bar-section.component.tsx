import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';

import { Typography } from '@mui/material';
import {
  NavBarSectionContainer,
  HeaderContainer,
  TitleContainer,
  SubTitle,
} from './nav-bar-section.styles';

type NavBarSectionProps = {
  title: string;
  subTitle?: string;
  expanded?: boolean;
  onToggle?: () => void;
  children: React.ReactNode;
};

const NavBarSection = ({
  title,
  subTitle,
  expanded = true,
  onToggle,
  children,
}: NavBarSectionProps) => {
  return (
    <NavBarSectionContainer component="section">
      <HeaderContainer component="header">
        <TitleContainer onClick={onToggle}>
          {expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          <Typography variant="body2">{title}</Typography>
        </TitleContainer>
        {!!subTitle && <SubTitle variant="caption">{subTitle}</SubTitle>}
      </HeaderContainer>
      {children}
    </NavBarSectionContainer>
  );
};

export default NavBarSection;
