import styled from 'styled-components';

export const NavBarCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
  width: 100%;
  padding: 10px;
  background-color: var(--theme-dark-background-light);
  font-size: 0.8rem;
`;

export const NormalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PositiveHeader = styled(NormalHeader)`
  color: var(--theme-dark-text-positive);
`;

export const NegativeHeader = styled(NormalHeader)`
  color: var(--theme-dark-text-negative);
`;

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
`;

export const Title = styled.h4`
  font-size: 0.8rem;
  font-weight: normal;
`;

export const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 0.2rem;
`;

export const DetailItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
