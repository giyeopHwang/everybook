import { useDisplayOptions } from '@/data/context/display-options-context';
import { TagTypes } from '@/data/types';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Button from '@/components/common/button/button.component';
import Tag from '@/components/common/tag/tag.component';
import {
  DashboardHeaderContainer,
  TitleGroup,
  Title,
  NavBarCollapseButton,
  NavBarExpandButton,
} from './dashboard-header.styles';

const DashboardHeader = () => {
  const { showNavBar, showAmount, setShowNavBar, setShowAmount } =
    useDisplayOptions();

  const title = '가계부';

  return (
    <DashboardHeaderContainer>
      {showNavBar ? (
        <NavBarCollapseButton onClick={() => setShowNavBar(false)}>
          <ChevronLeftIcon />
        </NavBarCollapseButton>
      ) : (
        <NavBarExpandButton onClick={() => setShowNavBar(true)}>
          <ChevronRightIcon />
        </NavBarExpandButton>
      )}
      <TitleGroup>
        <Title>{title}</Title>
        <Button onClick={() => setShowAmount(!showAmount)}>
          <span>금액감추기</span>{' '}
          {showAmount ? (
            <Tag type={TagTypes.off}>OFF</Tag>
          ) : (
            <Tag type={TagTypes.on}>ON</Tag>
          )}
        </Button>
      </TitleGroup>
    </DashboardHeaderContainer>
  );
};

export default DashboardHeader;
