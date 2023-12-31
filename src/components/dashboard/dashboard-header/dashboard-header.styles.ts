import styled from 'styled-components';

export const DashboardHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid var(--theme-light-border);
  height: 50px;
`;

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: normal;
`;

const NavBarToggleButton = styled.button`
  position: relative;
  width: 0.75rem;
  height: 50px;
`;

export const NavBarCollapseButton = styled(NavBarToggleButton)`
  left: -1.25rem;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: var(--theme-dark-background);
  color: var(--theme-dark-text);

  &:hover {
    background-color: var(--theme-dark-text-highlight);
  }
`;

export const NavBarExpandButton = styled(NavBarToggleButton)`
  left: -0.5rem;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: var(--theme-light-background-dark);
  color: var(--theme-light-text);

  &:hover {
    background-color: var(--theme-light-text-highlight);
  }
`;
