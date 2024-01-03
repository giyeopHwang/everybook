import styled from 'styled-components';

export const FrontContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  height: 100vh;
  background-color: var(--theme-dark-background);
  color: var(--theme-dark-text);
`;

export const Title = styled.div`
  font-family: 'Gowun Batang', serif;
  font-weight: 300;
  font-size: 2rem;
`;
