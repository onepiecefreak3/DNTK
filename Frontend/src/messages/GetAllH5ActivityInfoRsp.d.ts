/* eslint-disable */
import type { H5ActivityInfo } from "./H5ActivityInfo.d.ts";

/**
 * CmdId: 5676
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetAllH5ActivityInfoRsp {
  H5ActivityInfoList?: H5ActivityInfo[];
  Retcode?: number;
  ClientRedDotTimestamp?: number;
}
