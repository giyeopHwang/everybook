import { Link } from 'react-router-dom';
import styled from 'styled-components';

type NavBarContainerProps = {
  $show: boolean;
};

export const NavBarContainer = styled.div<NavBarContainerProps>`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  flex-direction: column;
  width: 220px;
  min-height: 100vh;
  background-color: var(--theme-dark-background);
  color: var(--theme-dark-text);
`;

export const TitleLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.3rem;
  height: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  background-color: var(--theme-dark-background-light);
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    color: var(--theme-dark-text-highlight);
  }
`;

export const LogoContainer = styled.div`
  * {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
