export interface Menuitem {
  Description: string;
  Value: string;
}

export interface ItemDescription {
  Description: string;
  Menuitems: Menuitem[];
  SecondaryDescription?: any;
}

export interface Item {
  ActiveFlag: string;
  ChildItemId: number;
  DeviceName: string;
  IconId: number;
  ItemDescription: ItemDescription;
  ItemId: number;
  ItemTier: number;
  Price: number;
  RestrictedRoles: string;
  RootItemId: number;
  ShortDesc: string;
  StartingItem: boolean;
  Type: string;
  itemIcon_URL: string;
}
