import { useState } from 'react';

import {
  NavBarCardTypes,
  NavBarNet,
  NavBarPlus,
  NavBarMinus,
} from '../../nav-bar-card-group/nav-bar-card/nav-bar-card.const';

import NavBarSection from '../nav-bar-section/nav-bar-section.component';
import NavBarCardGroup from '../../nav-bar-card-group/nav-bar-card-group.component';

const NavBarSnapshotSection = () => {
  const [expanded, setExpanded] = useState(true);

  const netAsset: NavBarNet = {
    title: '순자산',
    amount: 500_000_000,
    type: NavBarCardTypes.net,
  };

  const asset: NavBarPlus = {
    title: '자산',
    amount: 500_000_000,
    type: NavBarCardTypes.plus,
    details: [
      { name: '현금잔액', amount: 100_000_000 },
      { name: '투자자산', amount: 350_000_000 },
      { name: '기타자산', amount: 50_000_000 },
    ],
  };

  const dept: NavBarMinus = {
    title: '부채',
    amount: 100_000_000,
    type: NavBarCardTypes.minus,
    details: [
      { name: '대출', amount: 75_000_000 },
      { name: '기타부채', amount: 25_000_000 },
    ],
  };

  return (
    <NavBarSection
      title="이달의 자산현황"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <NavBarCardGroup
        net={netAsset}
        plus={asset}
        minus={dept}
        expanded={expanded}
      />
    </NavBarSection>
  );
};

export default NavBarSnapshotSection;
