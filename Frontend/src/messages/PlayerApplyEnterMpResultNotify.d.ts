/* eslint-disable */
/**
 * CmdId: 1807
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerApplyEnterMpResultNotify {
  IsAgreed?: boolean;
  TargetNickname?: string;
  Reason?: PlayerApplyEnterMpResultNotify_Reason;
  TargetUid?: number;
}

export enum PlayerApplyEnterMpResultNotify_Reason {
  REASON_PLAYER_JUDGE = 0,
  REASON_SCENE_CANNOT_ENTER = 1,
  REASON_PLAYER_CANNOT_ENTER_MP = 2,
  REASON_SYSTEM_JUDGE = 3,
  REASON_ALLOW_ENTER_PLAYER_FULL = 4,
  REASON_WORLD_LEVEL_LOWER_THAN_HOST = 5,
  REASON_HOST_IN_MATCH = 6,
  REASON_PLAYER_IN_BLACKLIST = 7,
  REASON_PS_PLAYER_NOT_ACCEPT_OTHERS = 8,
  REASON_HOST_IS_BLOCKED = 9,
  REASON_OTHER_DATA_VERSION_NOT_LATEST = 10,
  REASON_DATA_VERSION_NOT_LATEST = 11,
  REASON_PLAYER_NOT_IN_PLAYER_WORLD = 12,
  REASON_MAX_PLAYER = 13,
  UNRECOGNIZED = -1,
}
