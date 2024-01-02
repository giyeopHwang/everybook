import { render } from '@testing-library/react';
import Tag from './tag.component';
import { TagTypes } from './tag.const';

describe('Tag', () => {
  it('renders a untyped Tag component', () => {
    const untypedTag = render(<Tag>UNTYPED</Tag>);
    expect(untypedTag).toMatchSnapshot();
  });

  it('renders a normal-typed Tag component', () => {
    const normalTag = render(<Tag type={TagTypes.normal}>NORMAL</Tag>);
    expect(normalTag).toMatchSnapshot();
  });

  it('renders a on-typed Tag component', () => {
    const onTag = render(<Tag type={TagTypes.on}>ON</Tag>);
    expect(onTag).toMatchSnapshot();
  });

  it('renders a off-typed Tag component', () => {
    const onTag = render(<Tag type={TagTypes.off}>OFF</Tag>);
    expect(onTag).toMatchSnapshot();
  });
});
