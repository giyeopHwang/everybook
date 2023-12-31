import { TagTypes } from '@/data/types';
import { StyledTag } from './tag.styles';

type TagProps = {
  children: React.ReactNode;
  type?: TagTypes;
};

const Tag = ({ children, type }: TagProps) => {
  return <StyledTag $type={type}>{children}</StyledTag>;
};

export default Tag;
