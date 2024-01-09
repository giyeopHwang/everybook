import {
  TPanelToolBarButtonItem,
  TPanelToolBarCheckboxItem,
  TPanelToolBarItem,
  PanelToolBarItemTypes,
} from './panel-tool-bar.const';
import { ButtonGroup } from '@mui/material';
import TabToolCheckboxItem from './panel-tool-bar-checkbox-item/panel-tool-bar-checkbox-item.component';
import TabToolButtonItem from './panel-tool-bar-button-item/panel-tool-bar-button-item.component';
import { PanelToolBarContainer } from './panel-tool-bar.styles';

type PanelToolBarProps = {
  items: TPanelToolBarItem[];
};

const PanelToolBar = ({ items }: PanelToolBarProps) => {
  const checkboxItems = items.filter(
    (toolItem) => toolItem.type === PanelToolBarItemTypes.checkbox
  ) as TPanelToolBarCheckboxItem[];

  const buttonItems = items.filter(
    (toolItem) => toolItem.type === PanelToolBarItemTypes.button
  ) as TPanelToolBarButtonItem[];

  return (
    <PanelToolBarContainer>
      {checkboxItems.length !== 0 &&
        checkboxItems.map((checkboxItem) => (
          <TabToolCheckboxItem key={checkboxItem.label} {...checkboxItem} />
        ))}
      {buttonItems.length !== 0 && (
        <ButtonGroup variant="outlined">
          {buttonItems.map((buttonItem) => (
            <TabToolButtonItem key={buttonItem.label} {...buttonItem} />
          ))}
        </ButtonGroup>
      )}
    </PanelToolBarContainer>
  );
};

export default PanelToolBar;
