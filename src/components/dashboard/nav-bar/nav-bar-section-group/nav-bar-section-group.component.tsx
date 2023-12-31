'use client';

import NavBarSnapshotSection from './nav-bar-snapshot-section/nav-bar-snapshot-section.component';
import NavBarCashflowSection from './nav-bar-cashflow-section/nav-bar-cashflow-section.component';

const NavBarSectionGroup = () => {
  return (
    <>
      <NavBarSnapshotSection />
      <NavBarCashflowSection />
    </>
  );
};

export default NavBarSectionGroup;
