import { render } from '@testing-library/react';
import PanelFooter from './panel-footer.component';

describe('PanelFooter', () => {
  it('renders PanelFooter component', () => {
    const panelFooter = render(<PanelFooter>FOO</PanelFooter>);
    expect(panelFooter).toMatchSnapshot();
  });
});
