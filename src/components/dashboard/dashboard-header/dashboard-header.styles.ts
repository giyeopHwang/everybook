import styled from 'styled-components';

type TagProps = {
  $hide: boolean;
};

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

export const Tag = styled.span<TagProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 1.2rem;
  padding: 0.1rem;
  color: white;
  background-color: ${({ $hide }) =>
    $hide ? 'var(--theme-light-text-highlight)' : 'var(--theme-light-border)'};
  font-size: 0.8rem;
`;

const NavBarToggleButton = styled.button`
  position: relative;
  width: 0.75rem;
  height: 50px;
`;

export const NavBarCollapseButton = styled(NavBarToggleButton)`
  left: -1.5rem;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: var(--theme-dark-background);
  color: white;
`;

export const NavBarExpandButton = styled(NavBarToggleButton)`
  left: -0.5rem;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: var(--theme-dark-background);
  color: white;
`;
