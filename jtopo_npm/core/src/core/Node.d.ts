import DisplayObject, { PickType } from './DisplayObject';
import { PointLike, RectPosition } from './jtopo_type';
import Rectangle from './Rectangle';
import { Shape } from './geom/Shape';
/**
 * 节点对象，形状为矩形；
 * 核心属性：坐标(x,y)和尺寸(width, height)
 * 创建一个节点, 通常有以下几种形式：

```js
import {Node} from '@jtopo/core';

var node = new Node();
var node = new Node('name');

// new Node('name', x, y);
var node = new Node('name', 10, 10);

// new Node('name', x, y, width, height);
var node = new Node('name', 10, 10, 30, 30);

```
 *
 */
export declare class Node extends DisplayObject {
    className: string;
    /**
     * 坐标x
     */
    x: number;
    /**
     * 坐标y
     */
    y: number;
    /** 宽度 */
    width: number;
    /**
     * 高度
     */
    height: number;
    /**
     * 旋转角度
     */
    rotation: any;
    /**
     * 对齐原点的位置: center
     */
    originAlignPosition?: RectPosition;
    /**
     * 是否跟随父节点(当父节点是Link的时候)旋转
     */
    originAutoRotate: boolean;
    originOffset: number;
    /** 只读属性 */
    left: number;
    /** 只读属性 */
    top: number;
    /** 只读属性 */
    right: number;
    /** 只读属性 */
    bottom: number;
    /**
     * 节点文本
     * <p>多行直接可以使用\n换行 </p>
     */
    text: string;
    _text: string;
    _textArr?: Array<string>;
    _textDirty: any;
    _textWidth: number;
    _textHeight: number;
    _textLineHeight: number;
    image: any;
    private _image;
    /**
    * 是否是Node类的对象, 主要用于和Link区分
    */
    isNode: boolean;
    /**
     * 图片的src
     */
    private _imageSrc;
    zIndex: number;
    /**
     * 文本的旋转角度，相对于节点
     */
    textRotation: number;
    shape: Shape;
    _shapePoints: Array<PointLike>;
    _preWidth: number;
    _preHeight: number;
    /**
    * 序列化属性列表
    */
    serializers: Array<string>;
    getCtrlPoints: Function;
    getAnchorPoints: Function;
    pickType: PickType;
    /**
     * 旋转位置，默认: center
     */
    rotateCenter: RectPosition;
    /**
     * 所有参数可以为空，通过其他方法按需设置
     * @param text 文本
     * @param x 坐标x
     * @param y 坐标y
     * @param width 宽度
     * @param height 高度
     */
    constructor(text?: string, x?: number, y?: number, w?: number, h?: number);
    setShape(shape: Shape): void;
    _projectionShape(): void;
    /**
     * 设置附着在Link上的位置，只有父节点是Link时有效
     *
     * 例如：
```js
    // 将节点的 center 位置 始终对齐父对象（Link的时候）上 第0条线段的中心(0.5), 线段当前方向偏移2像素的距离
    node.alignOriginToLink('center', 0, 0.5, 2);

```
     * @param position 自身位置
     * @param originOffset 偏移量（沿着线段当前方向）
     * @param segIndex Link上线段索引
     * @param t Link上的位置（百分比)
     */
    alignOriginToLink(position: RectPosition, originOffset?: number, segIndex?: number, t?: number): void;
    /**
     * 将某一个位置对齐到父对象(父对象为Node的时候) 的某个位置上
     * @param position
     * @param parentPosition 默认为'center'
     */
    alignOriginToNode(position: RectPosition, parentPosition?: RectPosition): void;
    /**
     * 参与包围盒计算的四个点的坐标
     * @override
     */
    _OBBPoints(): {
        x: number;
        y: number;
    }[];
    _getShapeSize(): {
        width: number;
        height: number;
    };
    getSegmentPoints(): Array<PointLike>;
    getPoints(): PointLike[];
    /**
     * 设置图片
     * @param {String} img 图片的路径或者图片(Image), 或者 HtmlImage 或者 Canvas
     */
    setImage(img: any, fitSize: any): this;
    setText(v: string): void;
    calcTextSize(): void;
    /**
     * 属性设置
     * @param attr
     * @returns
     */
    attr(attr: any): this;
    /**
     * 调整尺寸到图片的实际大小
     */
    resizeToFitImage(): void;
    init(text: any, x: any, y: any, w: any, h: any): void;
    drawShape(ctx: any): void;
    _drawBackgroundAndBorder(ctx: any): boolean;
    protected _drawImage(ctx: any, img: any, hasBorder: any, hasBackgroundColor: any, borderWidth: any): void;
    strokeAndFill(ctx: any): void;
    /**
     * @override
     * @param ctx
     */
    draw(ctx: any): void;
    _isTextOrStyleDirty(): any;
    _calcTextPosition(borderWidth?: number, padding?: number): any;
    _paintText(ctx: any): any;
    getLinkChildren(recursive: any): any[];
    nearest(x: number, y: number): any;
    /**
     * 设置旋转中心
     */
    setRotateCenter(position: RectPosition): this;
    translateWith(x: number, y: number): this;
    /**
     * 平移对象到指定位置(x,y)
     *
     * 已过时，请使用：translate(x,y)
     * @deprecate
     */
    translateTo(x: number, y: number): this;
    /**
    * 平移对象
    * @param  x
    * @param  y
    */
    translate(x: number, y: number): this;
    /**
     * 设置坐标， translate的简写
     * @param x
     * @param y
     */
    setXY(x: number, y: number): this;
    /**
     * 平移对象的某个位置到指定位置(x,y),整个对象随之移动
     * @param positionName
     * @param x
     * @param y
     */
    translatePositionTo(positionName: string, x: number, y: number): void;
    /**
     * 设置尺寸
     * @param width 宽度
     * @param height 高度
     */
    resizeTo(width: number, height: number): this;
    /**
     * 原有尺寸基础上增加
     * @param w
     * @param h
     * @returns
     */
    resizeWith(w: number, h: number): this;
    scaleBy(x: any, y: any): this;
    /**
     * 以中心点cx，cy做缩放
     * @param sx 水平缩放
     * @param sy 垂直缩放
     * @param cx 中心x
     * @param cy 中心y
     */
    zoom(sx: number, sy: number, cx?: number, cy?: number): this;
    /**
     * 缩小到0.8
     */
    zoomOut(): this;
    /**
     * 放大到1.25
     */
    zoomIn(): this;
    /**
     * 缩放
     * @param sx 水平缩放系数
     * @param sy 垂直缩放系数
     */
    scaleTo(x: number, y: number): this;
    /**
     * 旋转
     * @param angle 旋转角度（弧度）
     */
    rotateTo(angle: number): this;
    /**
     * 旋转
     * @param angle 旋转角度（弧度）
     */
    rotate(angle: number): this;
    /**
     * 旋转-增量性
     * @param angle 旋转角度（弧度）
     */
    rotateWith(angle: number): this;
    getRect(): Rectangle;
    /**
     * @override
     * 获取对象上某一点
     * @param t [0-1] 在线段上的比例
     * @param segIndex 线段索引(Node是矩形，有4条线段，索引：[0-3]）可选项
     */
    getPoint(t: number, segIndex?: number): PointLike;
    /**
     * 修改父对象但保持屏幕坐标不变
     *
     * TODO: 旋转屏幕角度也要不变
     * @param newParent
     * @returns
     */
    changeParent(newParent: DisplayObject): this;
    /**
     * 将坐标原点设置到父的某个位置上
     * @param name
     * @returns
     */
    setOriginToPosition(name: string): this;
    /**
     * 得到对象内部位置坐标（参照左上角为0，0）
     * @param  name 位置名称
     * @param  x name为nearest时需要
     * @param  y name为nearest时需要
     */
    positionToLocalPoint(name: string, x?: number, y?: number): PointLike;
    getPositionNormal(name: any): number[];
}
export declare function updateTransformInNewParent(object: DisplayObject, newParent: DisplayObject): void;
export { Node as default };
