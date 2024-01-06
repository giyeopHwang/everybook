import { useSelector } from 'react-redux';
import { selectDisplayOptions } from '@/store/display-options/display-options-slice';
import { NavBarCardDetail } from '../nav-bar-card.const';
import { displayAmount } from '@/utils/utils';

import { Typography } from '@mui/material';
import { SubdirectoryArrowRight } from '@mui/icons-material';
import {
  NavBarCardDetailsContainer,
  DetailItem,
  TitleGroup,
} from './nav-bar-card-detail.styles';

type NavBarCardDetailsProps = {
  details: NavBarCardDetail[];
};

const NavBarCardDetails = ({ details }: NavBarCardDetailsProps) => {
  const { showAmount } = useSelector(selectDisplayOptions);
  return (
    <NavBarCardDetailsContainer component="section">
      {details.map(({ name, amount }) => (
        <DetailItem key={name}>
          <TitleGroup>
            <SubdirectoryArrowRight
              sx={{ width: '0.75rem', height: '0.75rem ' }}
            />
            <Typography variant="caption">{name}</Typography>
          </TitleGroup>
          <Typography variant="caption">
            {displayAmount(amount, showAmount)}
          </Typography>
        </DetailItem>
      ))}
    </NavBarCardDetailsContainer>
  );
};

export default NavBarCardDetails;
