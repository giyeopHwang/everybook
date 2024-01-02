export enum NavBarCardTypes {
  net,
  plus,
  minus,
}

export type NavBarCardDetail = {
  name: string;
  amount: number;
  link?: string;
};

export type NavBarNet = {
  title: string;
  amount: number;
  type: NavBarCardTypes.net;
};

export type NavBarPlus = {
  title: string;
  amount: number;
  type: NavBarCardTypes.plus;
  details: NavBarCardDetail[];
};

export type NavBarMinus = {
  title: string;
  amount: number;
  type: NavBarCardTypes.minus;
  details: NavBarCardDetail[];
};
