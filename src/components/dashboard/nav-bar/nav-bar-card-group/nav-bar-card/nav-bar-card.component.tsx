import { NavBarCardDetail } from '@/data/types';
import { useDisplayOptions } from '@/data/context/display-options-context';

import { Bars2Icon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import {
  NavBarCardContainer,
  NormalHeader,
  PositiveHeader,
  NegativeHeader,
  TitleGroup,
  Title,
  DetailsContainer,
  DetailItemContainer,
} from './nav-bar-card.styles';

type NavBarCardProps = {
  title: string;
  amount: number;
  type: 'net' | 'plus' | 'minus';
  details?: NavBarCardDetail[];
  expanded?: boolean;
};

const amountPlaceholder = '*********';

const NavBarCard = ({
  title,
  amount,
  type,
  details = [],
  expanded = true,
}: NavBarCardProps) => {
  const { showAmount } = useDisplayOptions();

  const Header = {
    net: NormalHeader,
    plus: PositiveHeader,
    minus: NegativeHeader,
  }[type];

  const Icon = {
    net: Bars2Icon,
    plus: PlusIcon,
    minus: MinusIcon,
  }[type];

  return (
    <NavBarCardContainer>
      <Header>
        <TitleGroup>
          <Icon
            style={{
              width: '0.9rem',
              height: '0.9rem',
            }}
          />
          <Title>{title}</Title>
        </TitleGroup>
        <span>{showAmount ? amount.toLocaleString() : amountPlaceholder}</span>
      </Header>
      {expanded && details.length !== 90 && (
        <DetailsContainer>
          {details.map(({ name, amount }) => (
            <DetailItemContainer key={name}>
              <span>&#x2514; {name}</span>
              <span>
                {showAmount ? amount.toLocaleString() : amountPlaceholder}
              </span>
            </DetailItemContainer>
          ))}
        </DetailsContainer>
      )}
    </NavBarCardContainer>
  );
};

export default NavBarCard;
