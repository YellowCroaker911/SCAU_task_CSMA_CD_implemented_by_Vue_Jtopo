import { PointLike, Vec2 } from '../jtopo_type';
/**
 * 多边形抽象，核心是维护一个点坐标列表，点坐标为单位化后的
 *
 * 单位化的含义: x和y始终在一个区间范围内 x:[-0.5, 0.5] y: [-0.5, 0.5]
 */
export declare class Shape {
    className: any;
    /**
     * 单位点列表 x:[-0.5, 0.5] y: [-0.5, 0.5]
     */
    points: Array<PointLike>;
    /**
    * 是否封闭图形（最后一个点是否连接到第一个点形成封闭图形），默认true
    */
    isClosed: boolean;
    dirty: boolean;
    constructor(unitPoints: Array<PointLike>);
    toPojo(): any;
    static fromPojo(pojo: any): any;
    static fromPoints(points: Array<PointLike>, keepAspectRatio?: boolean): Shape;
    draw(projecitionPoints: Array<PointLike>, ctx: CanvasRenderingContext2D): void;
    rotate(angle: number): this;
    scale(sx: number, sy: number): this;
    /**
     * 已过时，不推荐使用，未来将移除
     * @deprecated
     */
    static Scale(scaleX: any, scaleY: any): (p: any) => any;
    /**
     * 已过时，不推荐使用，未来将移除
     * @deprecated
     */
    static Rotate(angle: any): (p: any) => any;
    skew(sx: number, sy: number): this;
    static pointToSize(shape: Shape, width: number, height: number, keepAspectRatio?: boolean): {
        x: number;
        y: number;
    }[];
    /**
     * 生成多边形Shape对象
     * @param edgeCount 边的条数
     * @param initAngle 初始角度
     */
    static polygon(edgeCount?: number, initAngle?: number): Shape;
    /**
     * 菱形
     */
    static Damond: Shape;
    /**
     * 三角, 右朝向
     */
    static Triangle: Shape;
    /**
     * 平行四边形（上面一条边向右倾斜）
     * @param beginX X偏移百分比
     */
    static parallelogram(beginX?: number): Shape;
    static tip: Shape;
    /**
     * cos函数
     * @returns
     */
    static cos(opt: {
        begin: number;
        end: number;
        step: number;
        pointCount?: number;
    }): Shape;
    static circle(opt: {
        begin: number;
        end: number;
        step: number;
        pointCount?: number;
    }): Shape;
    /**
     * 自定义函数来构
     * @param f
     * @returns
     */
    static fn(f: Function): Shape;
    /**
     * 生成网格坐标(外边框)
     * @param rows 行
     * @param cols 列
     * @returns 一维数组(单位坐标)
     */
    static outerGrid(rows: number, cols: number): Shape;
    /**
     * 生成内网格坐标
     * @param rows 行
     * @param cols 列
     */
    static innerGrid(rows: number, cols: number): Shape;
    /**
     * 箭头形状实例对象
     */
    static Arrow: any;
    /**
    * 矩形实例对象
    */
    static Rect: any;
    /**
     * 已过时，不推荐使用，请使用 Shape.Arrow 来替代： Shape.ArrowShape
     * @deprecated
     */
    static ArrowShape: any;
    /**
     * 已过时，不推荐使用，，请使用 Shape.Rect 来替代： Shape.RectShape
     * @deprecated
     */
    static RectShape: any;
    /**
     * 生成多边形对象
     *
     * 已过时，不推荐使用，，请使用小写的 Shape.polygon 来替代：Shape.Polygon
     * @deprecated
     */
    static Polygon: any;
}
/**
 * 箭头形状
 */
export declare class ArrowShape extends Shape {
    className: any;
    isClosed: any;
    constructor(unitPoints?: {
        x: number;
        y: number;
    }[]);
    draw(projecitionPoints: Array<PointLike>, ctx: CanvasRenderingContext2D): void;
}
/**
 * 矩形形状
 */
export declare class RectShape extends Shape {
    className: string;
    constructor(unitPoints?: {
        x: number;
        y: number;
    }[]);
    draw(projecitionPoints: Array<PointLike>, ctx: CanvasRenderingContext2D): void;
}
export declare const RectDefaultPositions: {};
/**
 * 每个位置的单位向量，以0，0为圆心
 * TODO: 当center的时候是0，0，是零向量，并不是单位向量
 */
export declare function getRectPositionDirection(name: string): Vec2;
/**
 * 获取相对于圆心的旋转角度
 */
export declare function getRectPositionRotate(name: string): number;
