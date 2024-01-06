import { useSelector } from 'react-redux';
import { selectDisplayOptions } from '@/store/display-options/display-options-slice';

import { NavBarCardTypes } from '../nav-bar-card.const';
import { displayAmount } from '@/utils/utils';

import { Typography } from '@mui/material';
import { Toll, Add, Remove } from '@mui/icons-material';
import {
  NavBarCardHeaderContainer,
  TitleGroup,
} from './nav-bar-card-header.styles';

type NavBarCardHeaderProps = {
  title: string;
  amount: number;
  type: NavBarCardTypes;
};

const NavBarCardHeader = ({ title, amount, type }: NavBarCardHeaderProps) => {
  const { showAmount } = useSelector(selectDisplayOptions);

  const headerColor = {
    [NavBarCardTypes.net]: 'primary.contrastText',
    [NavBarCardTypes.plus]: 'success.light',
    [NavBarCardTypes.minus]: 'error.light',
  }[type];

  const Icon = {
    [NavBarCardTypes.net]: Toll,
    [NavBarCardTypes.plus]: Add,
    [NavBarCardTypes.minus]: Remove,
  }[type];

  return (
    <NavBarCardHeaderContainer color={headerColor}>
      <TitleGroup>
        <Icon sx={{ width: '0.9rem', height: '0.9rem ' }} />
        <Typography variant="body2" fontWeight="700">
          {title}
        </Typography>
      </TitleGroup>
      <Typography variant="body2" fontWeight="700">
        {displayAmount(amount, showAmount)}
      </Typography>
    </NavBarCardHeaderContainer>
  );
};

export default NavBarCardHeader;
