import { DisplayObject } from './DisplayObject';
import { Point } from './Point';
import { Endpoint, LinkTarget } from './Endpoint';
import Node from './Node';
import { ConnectPosition, PointLike, Vec2 } from './jtopo_type';
import { Transform } from './Transform';
/**
 * 连线对象，有起点和终端;
 *
 * 创建和设置起止，
 * 有以下形式:

```js
import {Link} from "@jtopo/core";

let link = new Link('text', 开始对象, 结束对象, 开始端点, 结束端点);

// 示例1
let link = new Link();
link.text = 'text';
link.setBegin(开始对象, 端点);
link.setEnd(结束对象, 端点);

// 示例2
let link = new Link('text', beginNode, endNode);
let link = new Link('text', beginNode, endNode, 'center', 'center');
let link = new Link('text', beginNode, {x: 10, y:20}, 'center');
let link = new Link('text', {x: 10, y:20}, endNode, 'center');
let link = new Link('text', {x:0, y:0}, {x: 10, y:20});

```
 */
export declare class Link extends DisplayObject {
    className: any;
    points: Array<Point>;
    text: string;
    label?: Node;
    beginArrow?: Node;
    endArrow?: Node;
    /**
     * 连线的开始对象
     */
    begin: Endpoint;
    /**
     * 连线的结束对象
     */
    end: Endpoint;
    /**
     * 开始的偏移
     */
    beginOffset?: number;
    /**
     * 结束的偏移
     */
    endOffset?: number;
    /**
     * zIndex 控制显示前后排序
     * <p>Link默认为1, Node默认为2，Link默认绘制在Node的后面</p>
     */
    zIndex: number;
    /**
     * 是否是Link类的对象, 主要用于和Node区分
     */
    isLink: any;
    _pickRadius: any;
    DefaultPositions: any;
    serializers: Array<string>;
    getAnchorPoints: Function;
    /**
     * @constructor
     * @param text 文本
     * @param begin 开始对象
     * @param end  结束对象
     * @param beginEndpointName 开始节点对象的‘定位点’, 可为空，默认为"center"
     * @param endEndpointName  结束节点对象的‘定位点’, 可为空，默认为"center"
     */
    constructor(text?: string, begin?: Node | Link | PointLike, end?: Node | Link | PointLike, beginEndpointName?: ConnectPosition, endEndpointName?: ConnectPosition);
    /**
     * 设置文本标签
     * <p>
     * </p>
     * @param textOrNode 文字或者Node对象
     */
    setLabel(textOrNode: string | Node): Node | this;
    /**
     * 属性设置
     * @param attr
     * @returns
     */
    attr(attr: any): this;
    getLabel(): Node;
    /**
     * 获取开始箭头对象
     */
    getBeginArrow(): Node;
    /**
     * 设置开始端的箭头
     */
    setBeginArrow(node: Node): this;
    /**
     * 获取结束箭头对象
     */
    getEndArrow(): Node;
    /**
     * 设置结束端的箭头
     * @param node
     */
    setEndArrow(node: Node): this;
    /**
     * @Override
     */
    _OBBPoints(): Array<PointLike>;
    /**
     * 设置连线的开始点
     * @param target 开始连接点对象，可以是Node、Link，也可以是一个简单的点, 甚至是一个函数，函数返回的对象必须有x、y属性。当时
     * @param positionName
     */
    setBegin(target: LinkTarget, positionName?: string): void;
    /**
     * 设置连线的结束点
     * @param target 连接对象，可以是Node、Link，也可以是一个简单的点，甚至是一个函数，函数返回的对象必须有x、y属性。
     * @param positionName 端点
     */
    setEnd(target: LinkTarget, positionName?: string): void;
    /**
     * 获取连线的开始点坐标
     */
    getBeginPoint(): Point;
    /**
     * 获取连线的结束点坐标
     */
    getEndPoint(): Point;
    drawPoints(ctx: CanvasRenderingContext2D, points: Array<PointLike>): void;
    /**
     * 绘制
     * @override
     */
    draw(ctx: CanvasRenderingContext2D): this;
    mousedownHandler(e: any): void;
    /**
     * @override
     * @param dx
     * @param dy
     * @returns
     */
    translateWith(dx: number, dy: number): this;
    _calcAZ(): any[];
    private _offsetAZ;
    /**
     * 返回偏移向量
     */
    _setOffsetByVec(aOrz: any, dir: Vec2, offset: any): void;
    updatePoints(): Point[];
    getPoints(): Point[];
    /**
     * @Override
     */
    getTransform(): Transform;
    /**
     * @Override
     */
    getTransformByDeep(deep: any): Transform;
    nearest(x: any, y: any): import("..").Intersect | {
        x: any;
        y: any;
    };
    getSegmentPoints(): Point[];
    upgradeParent(): any;
    isAlone(): boolean;
    isBeginDisplayObject(): boolean;
    isEndDisplayObject(): boolean;
    unlinkBegin(): void;
    unlinkEnd(): void;
    /**
     * 断开开始和
     */
    unlink(): void;
    changeParent(newParent: DisplayObject): this;
    positionToLocalPoint(name: string, x?: number, y?: number): PointLike;
}
export declare function getPointByEndpoint(link: any, endpoint: any): any;
export declare function getArrowDIR(link: Link, endpoint: Endpoint, points: null | Array<PointLike>, isBegin: boolean): Vec2;
export { Link as default, };
