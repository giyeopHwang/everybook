import styled from 'styled-components';
import { TagTypes } from './tag.const';

type TagProps = {
  $type?: TagTypes;
};

export const StyledTag = styled.span<TagProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 1.2rem;
  padding: 0.1rem;
  color: white;
  background-color: ${({ $type }) => {
    switch ($type) {
      case TagTypes.on:
        return 'var(--theme-light-tag-highlight)';
      case TagTypes.off:
      case TagTypes.normal:
      default:
        return 'var(--theme-light-tag-default)';
    }
  }};
  font-size: 0.8rem;
`;
