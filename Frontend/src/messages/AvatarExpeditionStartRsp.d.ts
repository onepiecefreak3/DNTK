/* eslint-disable */
import type Long from "long";
import type { AvatarExpeditionInfo } from "./AvatarExpeditionInfo.d.ts";

/**
 * CmdId: 1719
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarExpeditionStartRsp {
  ExpeditionInfoMap?: { [key: Long]: AvatarExpeditionInfo };
  Retcode?: number;
}

export interface AvatarExpeditionStartRsp_ExpeditionInfoMapEntry {
  Key: Long;
  Value?: AvatarExpeditionInfo;
}
