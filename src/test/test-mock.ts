import {
  NavBarCardTypes,
  NavBarNet,
  NavBarPlus,
  NavBarMinus,
} from '@/components/dashboard/nav-bar/nav-bar-card-group/nav-bar-card/nav-bar-card.const';

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
