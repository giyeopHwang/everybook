import {
  TTabToolButtonItem,
  TTabToolCheckboxItem,
  TTabToolItem,
  TabToolItemTypes,
} from './tab-tool-items.const';
import TabToolCheckboxItem from './tab-tool-checkbox-item/tab-tool-checkbox-item.component';
import { TabToolItemsContainer } from './tab-tool-items.styles';
import TabToolButtonItem from './tab-tool-button-item/tab-tool-button-item.component';
import { ButtonGroup } from '@mui/material';

type TabToolItemsProps = {
  toolItems: TTabToolItem[];
};

const TabToolItems = ({ toolItems }: TabToolItemsProps) => {
  const checkboxItems = toolItems.filter(
    (toolItem) => toolItem.type === TabToolItemTypes.checkbox
  ) as TTabToolCheckboxItem[];

  const buttonItems = toolItems.filter(
    (toolItem) => toolItem.type === TabToolItemTypes.button
  ) as TTabToolButtonItem[];

  return (
    <TabToolItemsContainer>
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
    </TabToolItemsContainer>
  );
};

export default TabToolItems;
