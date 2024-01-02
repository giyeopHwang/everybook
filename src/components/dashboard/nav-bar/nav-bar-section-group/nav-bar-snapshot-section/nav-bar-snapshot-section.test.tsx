import { renderWithWrapper } from '@/test/test-utils';
import NavBarSnapshotSection from './nav-bar-snapshot-section.component';

describe('NavBarSnapshotSection', () => {
  it('renders NavBarSnapshotSection component', () => {
    const navBarSnapshotSection = renderWithWrapper(<NavBarSnapshotSection />);
    expect(navBarSnapshotSection).toMatchSnapshot();
  });
});
