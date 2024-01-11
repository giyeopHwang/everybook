import { fireEvent, render, screen } from '@testing-library/react';
import { mockPanelToolBarCheckboxItems } from '@/test/test.mock';
import PanelToolBarCheckboxItem from './panel-tool-bar-checkbox-item.component';

describe('PanelToolBarCheckboxItem', () => {
  it('renders PanelToolBarCheckboxItem component', () => {
    const panelToolBarCheckboxItem = render(
      <PanelToolBarCheckboxItem {...mockPanelToolBarCheckboxItems[0]} />
    );
    expect(panelToolBarCheckboxItem).toMatchSnapshot();

    const label = screen.getByText('CHECK_1');
    expect(label).toBeInTheDocument();
  });

  it('fires callback when changed', () => {
    const mock = vi.fn();
    render(
      <PanelToolBarCheckboxItem
        {...mockPanelToolBarCheckboxItems[0]}
        onChange={mock}
      />
    );

    const label = screen.getByText('CHECK_1');
    fireEvent.click(label);
    expect(mock).toHaveBeenCalledOnce();
  });
});
