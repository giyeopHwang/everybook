import styled from 'styled-components';

export const WorksheetHeaderContainer = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.5rem;
  width: 100%;
  height: 110px;
`;

export const Today = styled.span`
  position: absolute;
  z-index: 1;
  top: 0.5rem;
  right: 0.5rem;
  color: var(--theme-light-text-subsidary);
  font-size: 0.9rem;
`;
