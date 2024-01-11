import { renderWithWrapper } from '@/test/test.utils';
import { mockNet, mockPlus, mockMinus } from '@/test/test.mock';
import NavBarCardGroup from './nav-bar-card-group.component';

describe('NavBarCardGroup', () => {
  it('renders NavBarCardGroup component', () => {
    const navBarCardGroup = renderWithWrapper(
      <NavBarCardGroup net={mockNet} plus={mockPlus} minus={mockMinus} />
    );

    expect(navBarCardGroup).toMatchSnapshot();
  });

  it('renders collapsed when specified', () => {
    const navBarCardGroup = renderWithWrapper(
      <NavBarCardGroup
        net={mockNet}
        plus={mockPlus}
        minus={mockMinus}
        expanded={false}
      />
    );

    expect(navBarCardGroup).toMatchSnapshot();
  });
});
