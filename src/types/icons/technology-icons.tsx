import { IconType } from 'react-icons';

export interface IIconListItem {
  icon: IconType;
  color: string;
}

export interface IPropsIcon {
  name: string;
}

export interface IIconList {
  [name: string]: IIconListItem;
}
