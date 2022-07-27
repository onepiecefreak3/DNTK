/* eslint-disable */
import type Long from "long";
import type { Vector } from "./Vector.d.ts";

/**
 * CmdId: 318
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtAvatarLockChairReq {
  ChairId?: Long;
  Position?: Vector;
}
