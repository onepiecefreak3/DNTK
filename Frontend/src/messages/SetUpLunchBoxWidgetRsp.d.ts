/* eslint-disable */
import type { LunchBoxData } from "./LunchBoxData.d.ts";

/**
 * CmdId: 4294
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SetUpLunchBoxWidgetRsp {
  LunchBoxData?: LunchBoxData;
  Retcode?: number;
}
