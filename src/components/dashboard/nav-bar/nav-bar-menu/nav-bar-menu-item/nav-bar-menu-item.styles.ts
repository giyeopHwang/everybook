import { Link } from 'react-router-dom';
import styled from 'styled-components';

type NavBarMenuItemLinkProps = {
  $selected: boolean;
};

export const NavBarMenuItemLink = styled(Link)<NavBarMenuItemLinkProps>`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0 15px;
  height: 30px;
  background-color: ${(props) =>
    props.$selected
      ? 'var(--theme-dark-background)'
      : 'var(--theme-dark-background-light)'};
  color: ${(props) =>
    props.$selected
      ? 'var(--theme-dark-text-highlight)'
      : 'var(--theme-dark-text)'};

  &:hover {
    cursor: pointer;
    background-color: var(--theme-dark-background);
    color: var(--theme-dark-text-highlight);
  }
`;
