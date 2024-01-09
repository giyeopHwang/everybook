import { ChangeEventHandler, MouseEventHandler } from 'react';

export enum PanelToolBarItemTypes {
  button,
  checkbox,
}

export type TPanelToolBarButtonItem = {
  type: PanelToolBarItemTypes.button;
  label: string;
  onClick: MouseEventHandler;
};

export type TPanelToolBarCheckboxItem = {
  type: PanelToolBarItemTypes.checkbox;
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler;
};

export type TPanelToolBarItem =
  | TPanelToolBarButtonItem
  | TPanelToolBarCheckboxItem;
