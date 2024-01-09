import { fireEvent, render, screen } from '@testing-library/react';
import { mockPanelToolBarButtonItems } from '@/test/test-mock';
import PanelToolBarButtonItem from './panel-tool-bar-button-item.component';

describe('PanelToolBarButtonItem', () => {
  it('renders PanelToolBarButtonItem component', () => {
    const panelToolBarButtonItem = render(
      <PanelToolBarButtonItem {...mockPanelToolBarButtonItems[0]} />
    );
    expect(panelToolBarButtonItem).toMatchSnapshot();

    const label = screen.getByText('BUTTON_1');
    expect(label).toBeInTheDocument();
  });

  it('fires callback when changed', () => {
    const mock = vi.fn();
    render(
      <PanelToolBarButtonItem
        {...mockPanelToolBarButtonItems[0]}
        onClick={mock}
      />
    );

    const label = screen.getByText('BUTTON_1');
    fireEvent.click(label);
    expect(mock).toHaveBeenCalledOnce();
  });
});
