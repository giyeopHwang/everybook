import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const EnterLink = styled(Link)`
  &:hover {
    cursor: pointer;
    color: var(--theme-dark-text-highlight);
  }
`;
