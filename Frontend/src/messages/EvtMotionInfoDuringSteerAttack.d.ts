/* eslint-disable */
import type { Vector } from "./Vector.d.ts";

export interface EvtMotionInfoDuringSteerAttack {
  FaceDir?: Vector;
  Velocity?: Vector;
  Pos?: Vector;
  EntityId?: number;
}
