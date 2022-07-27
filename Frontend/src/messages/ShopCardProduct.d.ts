/* eslint-disable */
import type { ItemParam } from "./ItemParam.d.ts";

export interface ShopCardProduct {
  ProductId?: string;
  PriceTier?: string;
  McoinBase?: number;
  HcoinPerDay?: number;
  Days?: number;
  RemainRewardDays?: number;
  CardProductType?: number;
  ResinCard?: ShopCardProduct_ResinCard | undefined;
}

export interface ShopCardProduct_ResinCard {
  BaseItemList?: ItemParam[];
  PerDayItemList?: ItemParam[];
}
