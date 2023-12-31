import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Button from '@/components/button/button.component';
import {
  DashboardHeaderContainer,
  TitleGroup,
  Title,
  Tag,
  NavBarCollapseButton,
  NavBarExpandButton,
} from './dashboard-header.styles';

const DashboardHeader = () => {
  const [hideNavBar, setHideNavBar] = useState(false);
  const [hideAmount, setHideAmount] = useState(false);

  const title = '가계부';

  return (
    <DashboardHeaderContainer>
      {hideNavBar ? (
        <NavBarExpandButton onClick={() => setHideNavBar(false)}>
          <ChevronRightIcon />
        </NavBarExpandButton>
      ) : (
        <NavBarCollapseButton onClick={() => setHideNavBar(true)}>
          <ChevronLeftIcon />
        </NavBarCollapseButton>
      )}
      <TitleGroup>
        <Title>{title}</Title>
        <Button onClick={() => setHideAmount(!hideAmount)}>
          <span>금액감추기</span>{' '}
          <Tag $hide={hideAmount}>{hideAmount ? 'ON' : 'OFF'}</Tag>
        </Button>
      </TitleGroup>
    </DashboardHeaderContainer>
  );
};

export default DashboardHeader;
