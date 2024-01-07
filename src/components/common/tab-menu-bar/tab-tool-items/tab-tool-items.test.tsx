import { render } from '@testing-library/react';
import TabToolItems from './tab-tool-items.component';
import {
  mockTabToolItems,
  mockTabToolButtonItems,
  mockTabToolCheckboxItems,
} from '@/test/test-mock';

describe('TabToolItems', () => {
  it('renders TabToolItems component with mixed items', () => {
    const tabToolItems = render(<TabToolItems toolItems={mockTabToolItems} />);
    expect(tabToolItems).toMatchSnapshot();
  });

  it('renders TabToolItems component with button items', () => {
    const tabToolItems = render(
      <TabToolItems toolItems={mockTabToolButtonItems} />
    );
    expect(tabToolItems).toMatchSnapshot();
  });

  it('renders TabToolItems component with checkbox items', () => {
    const tabToolItems = render(
      <TabToolItems toolItems={mockTabToolCheckboxItems} />
    );
    expect(tabToolItems).toMatchSnapshot();
  });
});
