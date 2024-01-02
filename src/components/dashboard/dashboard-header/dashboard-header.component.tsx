import { useDispatch, useSelector } from 'react-redux';

import { TagTypes } from '@/components/common/tag/tag.const';

import {
  selectDisplayOptions,
  setShowAmount,
  setShowNavBar,
} from '@/store/display-options/display-options-slice';

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

const ToggleButton = () => {
  const dispatch = useDispatch();
  const { showNavBar } = useSelector(selectDisplayOptions);

  return showNavBar ? (
    <NavBarCollapseButton
      data-testid="nav-bar-collapse-button"
      onClick={() => dispatch(setShowNavBar(false))}
    >
      <ChevronLeftIcon />
    </NavBarCollapseButton>
  ) : (
    <NavBarExpandButton
      data-testid="nav-bar-expand-button"
      onClick={() => dispatch(setShowNavBar(true))}
    >
      <ChevronRightIcon />
    </NavBarExpandButton>
  );
};

const HideAmountButtonTag = () => {
  const { showAmount } = useSelector(selectDisplayOptions);
  return showAmount ? (
    <Tag type={TagTypes.off}>OFF</Tag>
  ) : (
    <Tag type={TagTypes.on}>ON</Tag>
  );
};

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const { showAmount } = useSelector(selectDisplayOptions);

  const title = '가계부';

  return (
    <DashboardHeaderContainer>
      <ToggleButton />
      <TitleGroup>
        <Title>{title}</Title>
        <Button onClick={() => dispatch(setShowAmount(!showAmount))}>
          <span>금액감추기</span>
          <HideAmountButtonTag />
        </Button>
      </TitleGroup>
    </DashboardHeaderContainer>
  );
};

export default DashboardHeader;
