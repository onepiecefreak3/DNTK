/* eslint-disable */
import type { ShopGoods } from "./ShopGoods.d.ts";

/**
 * CmdId: 712
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface BuyGoodsReq {
  BuyCount?: number;
  Goods?: ShopGoods;
  ShopType?: number;
}
