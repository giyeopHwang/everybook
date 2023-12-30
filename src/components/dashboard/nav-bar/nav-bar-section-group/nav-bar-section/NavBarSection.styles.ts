import styled from 'styled-components';

export const NavBarSectionContainer = styled.section`
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  font-size: 0.9rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 0.15rem;
  margin-bottom: 0.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  &:hover {
    cursor: pointer;
    color: var(--theme-dark-text-highlight);
  }
`;

export const Title = styled.h2`
  font-weight: normal;
  font-size: 0.9rem;
`;

export const SubTitle = styled.h3`
  margin-left: 1.5rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: normal;
  font-size: 0.8rem;
`;
