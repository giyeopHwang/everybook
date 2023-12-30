import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  border: 1px solid var(--theme-light-border);
  padding: 0.25rem 0.5rem;
  color: var(--theme-light-text-subsidary);

  &:hover {
    border: 1px solid var(--theme-light-text-highlight);
    color: var(--theme-light-text);
  }
`;
