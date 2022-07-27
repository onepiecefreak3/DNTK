/* eslint-disable */
import type { BattlePassSchedule } from "./BattlePassSchedule.d.ts";

/**
 * CmdId: 2607
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface BattlePassCurScheduleUpdateNotify {
  HaveCurSchedule?: boolean;
  CurSchedule?: BattlePassSchedule;
}
