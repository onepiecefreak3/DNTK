/* eslint-disable */
import type { PlayerDieOption } from "./PlayerDieOption.d.ts";

/**
 * CmdId: 975
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface DungeonDieOptionReq {
  DieOption?: PlayerDieOption;
  IsQuitImmediately?: boolean;
}
