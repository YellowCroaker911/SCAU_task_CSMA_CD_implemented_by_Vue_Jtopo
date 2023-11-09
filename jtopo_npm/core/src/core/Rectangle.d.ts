import { PointLike } from "./jtopo_type";
/**
 * 矩形类型，四个核心属性：x、y、width、height
 */
export declare class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    setTo(x?: number, y?: number, width?: number, height?: number): void;
    getRect(): this;
    clone(): Rectangle;
    toString(): string;
    equals(rect: Rectangle): boolean;
    containsRect(rect: Rectangle): boolean;
    contains(x: number, y: number): boolean;
    isIntersectRect(rect: any): boolean;
    getRight(): number;
    getBottom(): number;
    isEmpty(): boolean;
    setToEmpty(): void;
    getCenter(): {
        x: number;
        y: number;
    };
    static union(out: Rectangle, rect: Rectangle): Rectangle;
    static normal(center: PointLike, p: PointLike): number[];
}
export declare class OBB {
    points: Array<PointLike>;
    aabb: Rectangle;
    constructor(points: Array<PointLike>);
    contains(x: number, y: number): boolean;
    static toAABB(points: Array<PointLike>): Rectangle;
}
export { Rectangle as default };
