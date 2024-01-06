import { NavBarCardTypes, NavBarCardDetail } from './nav-bar-card.const';

import { NavBarCardContainer } from './nav-bar-card.styles';
import NavBarCardHeader from './nav-bar-card-header/nav-bar-card-header.component';
import NavBarCardDetails from './nav-bar-card-detail/nav-bar-card-detail.component';

type NavBarCardProps = {
  title: string;
  amount: number;
  type: NavBarCardTypes;
  details?: NavBarCardDetail[];
  expanded?: boolean;
};

const NavBarCard = ({
  title,
  amount,
  type,
  details = [],
  expanded = true,
}: NavBarCardProps) => {
  return (
    <NavBarCardContainer color="primary.contrastText" bgcolor="primary.light">
      <NavBarCardHeader title={title} amount={amount} type={type} />
      {expanded && details.length !== 0 && (
        <NavBarCardDetails details={details} />
      )}
    </NavBarCardContainer>
  );
};

export default NavBarCard;
