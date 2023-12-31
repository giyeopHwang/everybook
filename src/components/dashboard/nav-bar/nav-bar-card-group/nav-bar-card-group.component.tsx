import { NavBarNet, NavBarPlus, NavBarMinus } from '@/data/types';
import NavBarCard from './nav-bar-card/nav-bar-card.component';
import { NavBarCardGroupContainer } from './nav-bar-card-group.styles';

type NavBarCardGroupProps = {
  net: NavBarNet;
  plus: NavBarPlus;
  minus: NavBarMinus;
  expanded: boolean;
};

const NavBarCardGroup = ({
  net,
  plus,
  minus,
  expanded = true,
}: NavBarCardGroupProps) => {
  return (
    <NavBarCardGroupContainer>
      <NavBarCard {...net} expanded={expanded} />
      <NavBarCard {...plus} expanded={expanded} />
      <NavBarCard {...minus} expanded={expanded} />
    </NavBarCardGroupContainer>
  );
};

export default NavBarCardGroup;
