/* eslint-disable */
import type { HomeFishFarmingInfo } from "./HomeFishFarmingInfo.d.ts";

/**
 * CmdId: 4678
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HomeGetFishFarmingInfoRsp {
  FishFarmingInfoList?: HomeFishFarmingInfo[];
  Retcode?: number;
}
