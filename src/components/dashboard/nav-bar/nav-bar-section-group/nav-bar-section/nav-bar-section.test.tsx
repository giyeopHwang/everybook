import { render, screen, fireEvent } from '@testing-library/react';
import NavBarSection from './nav-bar-section.component';

describe('NavBarSection', () => {
  it('renders NavBarSection component', () => {
    const navBarSection = render(
      <NavBarSection title="TITLE" onToggle={() => {}}>
        CHILDREN
      </NavBarSection>
    );
    expect(navBarSection).toMatchSnapshot();

    const title = screen.getByText('TITLE');
    expect(title).toBeInTheDocument();
  });

  it('renders with subTitle when specified', () => {
    const navBarSection = render(
      <NavBarSection title="TITLE" subTitle="SUBTITLE" onToggle={() => {}}>
        CHILDREN
      </NavBarSection>
    );
    expect(navBarSection).toMatchSnapshot();

    const subTitle = screen.getByText('SUBTITLE');
    expect(subTitle).toBeInTheDocument();
  });

  it('renders collapsed when specified', () => {
    const navBarSection = render(
      <NavBarSection title="TITLE" onToggle={() => {}} expanded={false}>
        CHILDREN
      </NavBarSection>
    );
    expect(navBarSection).toMatchSnapshot();
  });

  it('fires callback when title clicked', () => {
    const mock = vi.fn();
    const navBarSection = render(
      <NavBarSection title="TITLE" onToggle={mock}>
        CHILDREN
      </NavBarSection>
    );
    expect(navBarSection).toMatchSnapshot();

    const title = screen.getByText('TITLE');
    fireEvent.click(title);
    expect(mock).toHaveBeenCalledOnce();
  });
});
