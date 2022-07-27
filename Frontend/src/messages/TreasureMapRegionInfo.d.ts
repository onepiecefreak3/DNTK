/* eslint-disable */
import type { Vector } from "./Vector.d.ts";

export interface TreasureMapRegionInfo {
  StartTime?: number;
  CurrentProgress?: number;
  IsDoneMpSpot?: boolean;
  SceneId?: number;
  GoalPoints?: number;
  IsFindMpSpot?: boolean;
  RegionRadius?: number;
  RegionCenterPos?: Vector;
  RegionId?: number;
}
