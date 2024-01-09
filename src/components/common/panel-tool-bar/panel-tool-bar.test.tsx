import { render } from '@testing-library/react';
import {
  mockPanelToolBarButtonItems,
  mockPanelToolBarCheckboxItems,
  mockPanelToolBarItems,
} from '@/test/test-mock';
import PanelToolBar from './panel-tool-bar.component';

describe('PanelToolBar', () => {
  it('renders PanelToolBar component with mixed items', () => {
    const panelToolBar = render(<PanelToolBar items={mockPanelToolBarItems} />);
    expect(panelToolBar).toMatchSnapshot();
  });

  it('renders PanelToolBar component with button items', () => {
    const panelToolBar = render(
      <PanelToolBar items={mockPanelToolBarButtonItems} />
    );
    expect(panelToolBar).toMatchSnapshot();
  });

  it('renders PanelToolBar component with checkbox items', () => {
    const panelToolBar = render(
      <PanelToolBar items={mockPanelToolBarCheckboxItems} />
    );
    expect(panelToolBar).toMatchSnapshot();
  });
});
