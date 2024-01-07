import { fireEvent, render, screen } from '@testing-library/react';
import { mockTabToolCheckboxItems } from '@/test/test-mock';
import TabToolCheckboxItem from './tab-tool-checkbox-item.component';

describe('TabToolCheckboxItem', () => {
  it('renders TabToolItems component', () => {
    const tabToolCheckboxItem = render(
      <TabToolCheckboxItem {...mockTabToolCheckboxItems[0]} />
    );
    expect(tabToolCheckboxItem).toMatchSnapshot();

    const label = screen.getByText('CHECK_1');
    expect(label).toBeInTheDocument();
  });

  it('fires callback when changed', () => {
    const mock = vi.fn();
    render(
      <TabToolCheckboxItem {...mockTabToolCheckboxItems[0]} onChange={mock} />
    );

    const label = screen.getByText('CHECK_1');
    fireEvent.click(label);
    expect(mock).toHaveBeenCalledOnce();
  });
});
