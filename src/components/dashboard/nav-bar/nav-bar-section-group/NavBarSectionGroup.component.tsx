'use client';

import NavBarSnapshotSection from './nav-bar-snapshot-section/NavBarSnapshotSection.component';
import NavBarCashflowSection from './nav-bar-cashflow-section/NavBarCashflowSection.component';

const NavBarSectionGroup = () => {
  return (
    <>
      <NavBarSnapshotSection />
      <NavBarCashflowSection />
    </>
  );
};

export default NavBarSectionGroup;
