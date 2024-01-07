import {
  NavBarCardTypes,
  NavBarNet,
  NavBarPlus,
  NavBarMinus,
} from '@/components/dashboard/nav-bar/nav-bar-card-group/nav-bar-card/nav-bar-card.const';
import { TTabMenuItem } from '@/components/common/tab-menu-bar/tab-menu-items/tab-menu-items.const';
import {
  TTabToolCheckboxItem,
  TTabToolItem,
  TabToolItemTypes,
} from '@/components/common/tab-menu-bar/tab-tool-items/tab-tool-items.const';

export const mockNet: NavBarNet = {
  title: 'NET',
  amount: 100,
  type: NavBarCardTypes.net,
};

export const mockPlus: NavBarPlus = {
  title: 'PLUS',
  amount: 300,
  type: NavBarCardTypes.plus,
  details: [
    { name: 'PLUS_ITEM_1', amount: 100 },
    { name: 'PLUS_ITEM_2', amount: 200 },
  ],
};

export const mockMinus: NavBarMinus = {
  title: 'MINUS',
  amount: 200,
  type: NavBarCardTypes.minus,
  details: [
    { name: 'MINUS_ITEM_1', amount: 50 },
    { name: 'MINUS_ITEM_2', amount: 150 },
  ],
};

export const mockTabMenuItems: TTabMenuItem[] = [
  { label: 'TAB_1' },
  { label: 'TAB_2' },
];

export const mockTabToolButtonItems: TTabToolItem[] = [
  {
    type: TabToolItemTypes.button,
    label: 'BUTTON_1',
    onClick: () => {},
  },
  {
    type: TabToolItemTypes.button,
    label: 'BUTTON_2',
    onClick: () => {},
  },
];

export const mockTabToolCheckboxItems: TTabToolCheckboxItem[] = [
  {
    type: TabToolItemTypes.checkbox,
    label: 'CHECK_1',
    checked: true,
    onChange: () => {},
  },
  {
    type: TabToolItemTypes.checkbox,
    label: 'CHECK_2',
    checked: false,
    onChange: () => {},
  },
];

export const mockTabToolItems: TTabToolItem[] = [
  ...mockTabToolButtonItems,
  ...mockTabToolCheckboxItems,
];
