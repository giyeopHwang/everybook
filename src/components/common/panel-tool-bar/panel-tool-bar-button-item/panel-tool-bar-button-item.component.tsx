import { TPanelToolBarButtonItem } from '../panel-tool-bar.const';
import { PanelToolBarButton } from './panel-tool-bar-button-item.styles';

const PanelToolBarButtonItem = ({
  label,
  onClick,
}: TPanelToolBarButtonItem) => {
  return <PanelToolBarButton onClick={onClick}>{label}</PanelToolBarButton>;
};

export default PanelToolBarButtonItem;
