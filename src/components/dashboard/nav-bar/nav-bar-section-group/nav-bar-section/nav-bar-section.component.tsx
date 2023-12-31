import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

import {
  NavBarSectionContainer,
  HeaderContainer,
  TitleContainer,
  Title,
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
    <NavBarSectionContainer>
      <HeaderContainer>
        <TitleContainer onClick={onToggle}>
          {expanded ? (
            <ChevronUpIcon style={{ width: '1rem', height: '1rem' }} />
          ) : (
            <ChevronDownIcon style={{ width: '1rem', height: '1rem' }} />
          )}
          <Title>{title}</Title>
        </TitleContainer>
        {!!subTitle && <SubTitle>{subTitle}</SubTitle>}
      </HeaderContainer>
      {children}
    </NavBarSectionContainer>
  );
};

export default NavBarSection;
