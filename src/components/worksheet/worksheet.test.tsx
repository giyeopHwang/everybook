import { renderWithWrapper } from '@/test/test-utils';
import Worksheet from './worksheet.component';

describe('Worksheet', () => {
  it('renders Worksheet component', () => {
    const worksheet = renderWithWrapper(<Worksheet />);
    expect(worksheet).toMatchSnapshot();
  });
});
