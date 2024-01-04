import { MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDisplayOptions,
  setShowAmount,
  setShowNavBar,
} from '@/store/display-options/display-options-slice';

import { Button, Typography } from '@mui/material';
import {
  ArrowLeft,
  ArrowRight,
  ToggleOn,
  ToggleOff,
} from '@mui/icons-material';
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
      variant="contained"
      disableElevation
      color="inherit"
      onClick={() => dispatch(setShowNavBar(false))}
      data-testid="nav-bar-collapse-button"
    >
      <ArrowLeft />
    </NavBarCollapseButton>
  ) : (
    <NavBarExpandButton
      variant="contained"
      disableElevation
      color="primary"
      onClick={() => dispatch(setShowNavBar(true))}
      data-testid="nav-bar-expand-button"
    >
      <ArrowRight />
    </NavBarExpandButton>
  );
};

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const { showAmount } = useSelector(selectDisplayOptions);

  const title = '가계부';

  const handleHideAmountClick: MouseEventHandler = (event) => {
    event.stopPropagation();
    dispatch(setShowAmount(!showAmount));
  };

  return (
    <DashboardHeaderContainer component="header">
      <ToggleButton />
      <TitleGroup>
        <Title color="text.primary">{title}</Title>
        <Button
          variant="outlined"
          size="small"
          color={showAmount ? undefined : 'secondary'}
          endIcon={showAmount ? <ToggleOff /> : <ToggleOn />}
          onClick={handleHideAmountClick}
        >
          <Typography variant="caption">금액감추기</Typography>
        </Button>
      </TitleGroup>
    </DashboardHeaderContainer>
  );
};

export default DashboardHeader;
