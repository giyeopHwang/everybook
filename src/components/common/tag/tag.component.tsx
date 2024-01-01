import { TagTypes } from './tag.const';
import { StyledTag } from './tag.styles';

type TagProps = {
  children: React.ReactNode;
  type?: TagTypes;
};

const Tag = ({ children, type = TagTypes.normal }: TagProps) => {
  return <StyledTag $type={type}>{children}</StyledTag>;
};

export default Tag;
