/* eslint-disable */
import type { AbilityControlBlock } from "./AbilityControlBlock.d.ts";

/**
 * CmdId: 1131
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AbilityChangeNotify {
  EntityId?: number;
  AbilityControlBlock?: AbilityControlBlock;
}
