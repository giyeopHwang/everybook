import { fireEvent, render, screen } from '@testing-library/react';
import { mockTabToolButtonItems } from '@/test/test-mock';
import TabToolButtonItem from './tab-tool-button-item.component';

describe('TabToolButtonItem', () => {
  it('renders TabToolItems component', () => {
    const tabToolButtonItem = render(
      <TabToolButtonItem {...mockTabToolButtonItems[0]} />
    );
    expect(tabToolButtonItem).toMatchSnapshot();

    const label = screen.getByText('BUTTON_1');
    expect(label).toBeInTheDocument();
  });

  it('fires callback when changed', () => {
    const mock = vi.fn();
    render(<TabToolButtonItem {...mockTabToolButtonItems[0]} onClick={mock} />);

    const label = screen.getByText('BUTTON_1');
    fireEvent.click(label);
    expect(mock).toHaveBeenCalledOnce();
  });
});
