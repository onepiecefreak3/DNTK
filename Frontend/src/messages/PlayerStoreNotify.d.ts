/* eslint-disable */
import type { StoreType } from "./StoreType.d.ts";
import type { Item } from "./Item.d.ts";

/**
 * CmdId: 672
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerStoreNotify {
  ItemList?: Item[];
  WeightLimit?: number;
  StoreType?: StoreType;
}
