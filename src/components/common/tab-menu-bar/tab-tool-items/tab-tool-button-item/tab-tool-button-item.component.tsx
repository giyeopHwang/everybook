import { TTabToolButtonItem } from '../tab-tool-items.const';
import { TabToolButton } from './tab-tool-button-item.styles';

const TabToolButtonItem = ({ label, onClick }: TTabToolButtonItem) => {
  return <TabToolButton onClick={onClick}>{label}</TabToolButton>;
};

export default TabToolButtonItem;
