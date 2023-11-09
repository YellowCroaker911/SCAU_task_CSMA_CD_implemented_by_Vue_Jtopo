import Intersect from '../geom/Intersect';
import { PointLike } from '../jtopo_type';
import { DisplayObject } from '../DisplayObject';
declare function getParallelLines(p1: any, p2: any, count: any, gap: any): PointLike[][];
declare function getParallelLine(p1: any, p2: any, gap: any): PointLike[];
declare function pointProjectToLine(p: any, p1: any, p2: any): Intersect;
declare function getNearestPointOnLines(p: any, points: any): Intersect;
declare function getLineIntersectPoint(p1: any, p2: any, m1: any, m2: any, isLine?: boolean): {
    x: number;
    y: number;
};
declare function getLineIntersectPoints(p1: any, p2: any, points: any, isLine?: boolean): any[];
declare function getNearestPointOnObjectsOBB(mouseInStagePoint: any, nodeOrLinks: any, minDist: any): any;
export type NearestInfo = {
    object: any;
    anchorName: string;
};
export declare function getNearestAnchorOnObjects(mouseInStagePoint: PointLike, nodeOrLinks: Array<DisplayObject>, minDist: number): NearestInfo;
declare function getNearestPositionName(intersectInStage: any, minDist: any): string;
export declare function isHorizontal(k: any): boolean;
export declare function range(value: any, min: any, max: any): any;
export { getNearestPositionName, getNearestPointOnObjectsOBB, getNearestPointOnLines, getLineIntersectPoint, getLineIntersectPoints, getParallelLine, getParallelLines, pointProjectToLine };
