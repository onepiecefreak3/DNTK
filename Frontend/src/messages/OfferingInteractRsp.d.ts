/* eslint-disable */
import type { PlayerOfferingData } from "./PlayerOfferingData.d.ts";

/**
 * CmdId: 2908
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface OfferingInteractRsp {
  OfferingData?: PlayerOfferingData;
  Retcode?: number;
}
