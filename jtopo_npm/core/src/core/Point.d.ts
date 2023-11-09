import { EndpointOffset, PointLike } from './jtopo_type';
export declare class Point {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    toPojo(): {
        x: number;
        y: number;
    };
    static isLikePoint(object: any): boolean;
    static looksSame(p1: any, p2: any, e: any): boolean;
    static middle(p1: any, p2: any): {
        x: number;
        y: number;
    };
    static getAngle(a: any, z: any): number;
    /**
     * 点(x,y) 绕点 (x0,y0) 旋转angle后的坐标
     * @param x
     * @param y
     * @param cx
     * @param cy
     * @param angle
     */
    static rotate(x: number, y: number, cx: number, cy: number, angle: number): PointLike;
    static rotatePoint(p1: any, p2: any, a: any): {
        x: any;
        y: any;
    };
    static distance(x: any, y: any, x2: any, y2: any): number;
    static distancePoint(p1: any, p2: any): number;
    static mergePoints(points: any): any[];
    static extend(a: any, z: any, len: any): {
        x: any;
        y: any;
    };
    static forward(p: PointLike, target: PointLike, distance: number): {
        x: number;
        y: number;
    };
    static offsetWithAngle(p: PointLike, angle: number, offset: EndpointOffset): {
        x: number;
        y: number;
    };
    static createPoints(p: PointLike, n: Array<number>, count?: number, containsP?: boolean): PointLike[];
    static createPoints2(p: any, n: any, count: any): PointLike[];
    static between(a: PointLike, b: PointLike, t: number, offset?: number): PointLike;
    static countPointsDistance(points: Array<PointLike>): number;
    static betweenPoints(points: Array<PointLike>, t: number, offset?: number): PointLike;
}
