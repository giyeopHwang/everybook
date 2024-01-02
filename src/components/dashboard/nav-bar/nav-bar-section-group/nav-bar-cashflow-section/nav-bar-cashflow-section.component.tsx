import { useState } from 'react';
import {
  NavBarCardTypes,
  NavBarNet,
  NavBarPlus,
  NavBarMinus,
} from '../../nav-bar-card-group/nav-bar-card/nav-bar-card.const';

import NavBarSection from '../nav-bar-section/nav-bar-section.component';
import NavBarCardGroup from '../../nav-bar-card-group/nav-bar-card-group.component';

const NavBarCashflowSection = () => {
  const [expanded, setExpanded] = useState(true);

  const netCashflow: NavBarNet = {
    title: '수입 - 지출',
    amount: 7_000_000,
    type: NavBarCardTypes.net,
  };

  const income: NavBarPlus = {
    title: '수입',
    amount: 10_000_000,
    type: NavBarCardTypes.plus,
    details: [
      { name: '이달의 수입', amount: 8_000_000 },
      { name: '전월이월', amount: 2_000_000 },
    ],
  };

  const expense: NavBarMinus = {
    title: '지출',
    amount: 3_000_000,
    type: NavBarCardTypes.minus,
    details: [
      { name: '현금지출', amount: 1_000_000 },
      { name: '카드지출', amount: 2_000_000 },
    ],
  };

  return (
    <NavBarSection
      title="이달의 가계"
      subTitle="2024.01.01 ~ 2024.01.31"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <NavBarCardGroup
        net={netCashflow}
        plus={income}
        minus={expense}
        expanded={expanded}
      />
    </NavBarSection>
  );
};

export default NavBarCashflowSection;
