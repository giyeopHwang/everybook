export enum TagTypes {
  on,
  off,
}

export type NavBarCardDetail = {
  name: string;
  amount: number;
  link?: string;
};

export type NavBarNet = {
  title: string;
  amount: number;
  type: 'net';
};

export type NavBarPlus = {
  title: string;
  amount: number;
  type: 'plus';
  details: NavBarCardDetail[];
};

export type NavBarMinus = {
  title: string;
  amount: number;
  type: 'minus';
  details: NavBarCardDetail[];
};
