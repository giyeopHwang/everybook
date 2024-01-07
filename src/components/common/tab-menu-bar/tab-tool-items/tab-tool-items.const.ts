import { ChangeEventHandler, MouseEventHandler } from 'react';

export enum TabToolItemTypes {
  button,
  checkbox,
}

export type TTabToolButtonItem = {
  type: TabToolItemTypes.button;
  label: string;
  onClick: MouseEventHandler;
};

export type TTabToolCheckboxItem = {
  type: TabToolItemTypes.checkbox;
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler;
};

export type TTabToolItem = TTabToolButtonItem | TTabToolCheckboxItem;
