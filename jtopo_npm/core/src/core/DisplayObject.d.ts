import EventTarget from './EventTarget';
import Rectangle, { OBB } from './Rectangle';
import Style from './Style';
import Transform from './Transform';
import { PointLike, StyleOpt } from './jtopo_type';
import { Container, Interactable, Visbility } from './Interfaces';
import { InputEvent, TopoEvent } from './EventUtils';
/**
 * 鼠标拾取方式（节点内容:shape，还是整个节点矩形区域: rect)
 */
export type PickType = 'shape' | 'rect';
export declare let touchstartEvent: InputEvent;
export declare let touchmoveEvent: InputEvent;
export declare let touchendEvent: InputEvent;
export declare let mousedownEvent: InputEvent;
export declare let mouseupEvent: InputEvent;
export declare let mousemoveEvent: InputEvent;
export declare let clickEvent: InputEvent;
export declare let dblclickEvent: InputEvent;
export declare let mouseenterEvent: InputEvent;
export declare let mouseoutEvent: InputEvent;
export declare let mousedragendEvent: InputEvent;
export declare let selectedEvent: InputEvent;
export declare let unselectedEvent: InputEvent;
export declare let removeEvent: TopoEvent;
/**
 * 显示对象, Node、Link的父类
 */
export declare abstract class DisplayObject extends EventTarget implements Container, Visbility, Interactable {
    className: string;
    /**
     * 唯一标志，系统自动生成、不能有重复、不要修改
     */
    id: number;
    /**
     * 名称，可以在编辑时指定，运行时通过名称获取对象的引用
     */
    name?: string;
    z: number;
    /**
     * 是否是Node对象
     */
    isNode: boolean;
    /**
     * 是否是Link对象
     */
    isLink?: boolean;
    /**
     * 上级对象
     */
    parent?: DisplayObject;
    /**
     * 子节点集合
     */
    children: Array<DisplayObject>;
    transform: Transform;
    /**
     * 样式
     */
    style: Style;
    /**
     * 计算后的
     */
    _style: Style;
    classList: Array<string>;
    /**
    * 选中时的样式，如果不设置将使用默认的
    */
    selectedStyle?: Style;
    /**
     * 鼠标拾取方式（节点内容，还是整个节点矩形区域)
     */
    pickType: PickType;
    /**
    * 自定义选中状态如何绘制的回调函数，jtopo默认：Node选中在对象外层出现一个框，Link是呈现阴影
    * <p>默认值：null， 使用jtopo默认</p>
    */
    paintSelected?: Function;
    /**
     * 如果对象超出了视口(画布), 下面的子节点是否还考虑绘制, 默认：仍旧尝试绘制
     */
    paintChildrenWhenOutOfViewport: boolean;
    /** 是否超出了'视口'(画布) */
    _isOutOfViewport: boolean;
    /**
     * 本地坐标系的原点，采用单位化坐标， 默认为[0,0], 父对象的中心
     */
    origin: Array<number>;
    positions: any;
    /** 是否绘制到了最后一帧：是否在当前最新的画布上 */
    painted: boolean;
    isPointOn: boolean;
    dirty: boolean;
    /**
     * 鼠标选中线的精度, 默认为null，是否精准才能选中, 数值越大鼠标越好选中
     */
    _pickRadius: number;
    /**
    * 为了安全考虑，防止与对象属性冲突,用户最好使用该对象
    * 用户附加到该对象的自定义属性
    */
    userData?: any;
    _obb?: OBB;
    /**
     * 所有以本对象为结束点的Link对象数组
     */
    inLinks: Array<DisplayObject>;
    /**
    * 所有以本节点为开始点的Link对象数组
    */
    outLinks: Array<DisplayObject>;
    destroyed: boolean;
    /**
     * 序列化属性列表
     */
    serializers: Array<string>;
    /**
     * zIndex显示前后排序
     * <p>Node默认为2，Link默认为1, Link默认绘制在Node的后面</p>
     */
    zIndex: number;
    /**
     * 厚度（仅3D视图下有意义）, 未来可能移除，3D功能未来将独立成为一个库
     * @deprecated
     */
    depth: number;
    /**
     * 是否冻结（所有下级子节点）
     *
     * 冻结后鼠标拾取到子节点或者本节点都视为拾取了本节点
     */
    frozen: boolean;
    /**
     * 水平缩放系数
     */
    scaleX: number;
    /**
     * 垂直缩放系数
     */
    scaleY: number;
    skewX: number;
    skewY: number;
    /**
     * 层级深度, Layer为0，下面第一层子节点为1，依次类推
     */
    deep: number;
    /**
     * 旋转角度
     */
    rotation: any;
    visible: boolean;
    /**
    * 是否显示选中的效果，默认显示
    */
    showSelected: boolean;
    /**
    * 是否可序列化，默认true
    * 如果为false，序列化时将跳过该对象
    */
    serializeable: boolean;
    /**
    * 是否可连线，仅仅编辑模式有意义
    */
    connectable: boolean;
    /**
     * 是否响应鼠标，为false的时候，不响应鼠标的动作
     */
    mouseEnabled: boolean;
    /**
     * 是否可拖拽
     */
    draggable: boolean;
    /**
     * 是否被选中了
     */
    isSelected: boolean;
    /**
     * 是否可以调整角度、尺寸，仅仅编辑模式有意义
     */
    editable: boolean;
    constructor();
    /**
     * 参与包围盒计算的点
     */
    abstract _OBBPoints(): Array<PointLike>;
    getAABB(recursive: boolean, minDeep: number): Rectangle;
    abstract getPoints(): any;
    /**
     * 绘制具体内容
     */
    abstract draw(ctx: CanvasRenderingContext2D): any;
    /**
     * 得到对象内部位置坐标（参照左上角为0，0）
     * @param  name 位置名称
     * @param  x name为nearest时需要
     * @param  y name为nearest时需要
     */
    abstract positionToLocalPoint(name: string, x?: number, y?: number): PointLike;
    abstract translateWith(dx: any, dy: any): any;
    abstract changeParent(newParent: DisplayObject): any;
    abstract getSegmentPoints(): Array<PointLike>;
    mousedragHandler(inputSystem: any): void;
    /**
     * 设置坐标原点
     * @param origin
     */
    setOrigin(a: number, b: number): this;
    getAllVisiable(): Array<any>;
    transformPoint(p: any): {
        x: number;
        y: number;
    };
    getTransform(): Transform;
    /**
     * 请直接访问 style对象的属性
     * @deprecate
     */
    getStyle(name: any): any;
    /**
     * 等价于css 方法
     */
    setStyles(styleOpt: any): this;
    isVisible(): boolean;
    /**
     * 背景和边框的设置语法参考css样式, 图形绘制的语法使用cavnas属性设置，如下:
```
    node.css({
        border: 'solid 1px gray',
        borderRadius: 5,
        background: "white url('./demo/img/node2.png') no-repeat",
        backgroundSize: '32px 32px',
        backgroundPosition: 'center center',
        zIndex: 2,
        font: 'bold 11px arial',
        color: 'gray',
        textPosition: 'center',
        textAlign: 'center',
        textBaseline: 'middle',
    });
```
     * 如果在循环或者动画中考虑性能，请直接给样式赋值，速度会快很多，例如:
```js
    node.style.borderWidth = 1;
    node.style.borderColor = 'gray';
    //上面两句比简写：node.style.border = '1px gray'; 速度快几十倍

    node.style.lineWidth = 5;
    node.style.fillStyle = 'gray';
```
     * @param  styleOpt
     */
    css(styleOpt: StyleOpt, value?: any): this;
    /**
     * 清除通过css定义的样式
     */
    clearCss(): void;
    /**
     * 增加一个样式
```js
    obj.addClass('.myClass');
```
     * @param styleName
     */
    addClass(styleName: string): void;
    /**
     * 移除一个样式
```js
    obj.removeClass('.myClass');
```
     * @param styleName
     */
    removeClass(styleName: string): void;
    /**
     * 得到当前对象的绝对变换, 绝对就是将各层父元素的变换考虑进去
     * @param deep 追溯到第几层结束
     */
    getTransformByDeep(deep: number): Transform;
    getLayerTransform(): Transform;
    getStageTransform(): Transform;
    /**
     * 显示
     */
    show(): this;
    /**
     * 隐藏
     */
    hide(): this;
    mousePickupPath(ctx: any, path?: any): void;
    mousePickupStroke(ctx: any, pickRadius: any): void;
    /**
     * 设置用户自定义数据
     * <p>直接在节点对象上增加属性不是稳妥的方法，若要向节点增加额外的属性，应该调用此方法</p>
     */
    setUserData(data: any): this;
    /**
     * 读取用户自定义的数据
     */
    getUserData(): any;
    /**
     * 移除用户自定义的数据
     */
    removeUserData(): this;
    definePosition(name: number, fun: Function): void;
    /**
     * 获取本对象上定义的所有位置名称
     */
    getPositionNames(): string[];
    /**
     * 获取对象上某一点
     * @param t [0-1] 在线段上的比例
     * @param segIndex 线段索引(Node是矩形，有4条线段，索引：[0-3]）可选项
     */
    getPoint(t: number, segIndex?: number): PointLike;
    /**
     * 获取对象边框或者线上某一点(本地坐标系)
     */
    getLocalPoint(t: number, segIndex?: number, offset?: number): PointLike;
    _findChildren(propertyName: string, valueOrFn: any, recursive?: boolean): Array<DisplayObject>;
    /**
     * 对象选择器
     *
     * 语法兼容DOM的Selector API标准（并不支持标准里的所有语法）
     *
     * 支持的语法形式如下：
```js

    //obj.querySelector(类名称)， 例如:
    let circleNodes = layer.querySelectorAll('CircleNode');
    let links = layer.querySelector('Link');

    //obj.querySelector(样式名称)，例如:
    let serverNodes = layer.querySelectorAll('.server');
    let activedObjs = layer.querySelectorAll('.active');

    //obj.querySelector(ID);
    let obj = layer.querySelectorAll('#123')[0];

    //obj.querySelector([属性名称=""]);
    let arr = layer.querySelectorAll('[text="abc"]');
    let arr2 = layer.querySelectorAll('[draggable=true]');

    // obj.querySelector(类名称|样式名称[属性名称=""]);
    let obj = layer.querySelector('TextNode[x<=-200]');
    let obj2 = layer.querySelector('.server[text="X86"]')

```
     * @param querySelector
     * @returns
     */
    querySelectorAll(querySelector: string): DisplayObject[];
    /**
     * 功能类似querySelectorAll,但只返回第一个满足条件的对象或者null
     * @param querySelector
     * @returns
     */
    querySelector(querySelector: string): DisplayObject;
    /**
     * 递归式 获取所有节点对象
     * @returns 所有节点对象
     */
    getAllNodes(): Array<Node>;
    /**
     * 递归式 获取所有连线对象
     * @returns 所有连线对象
     */
    getAllLinks(): Array<DisplayObject>;
    touchstartHandler(e: any): void;
    touchendHandler(e: any): void;
    touchmoveHandler(e: any): void;
    mousedownHandler(e: any): void;
    mouseupHandler(e: any): void;
    mouseoverHandler(e: any): void;
    mousemoveHandler(e: any): void;
    mouseenterHandler(event: any): void;
    mouseoutHandler(event: any): void;
    mousedragEndHandler(event: any): void;
    clickHandler(e: any): void;
    dblclickHandler(e: any): void;
    selectedHandler(): void;
    unselectedHandler(): void;
    pickUp(ctx: any, pickMouseDisabled: any): DisplayObject;
    pickUpChild(ctx: any, pickMouseDisabled?: boolean): DisplayObject | null;
    /**
     * 增加子对象
     */
    addChild(child: DisplayObject): this;
    /**
     * 设置zIndex
     * @param  index
     */
    setzIndex(index: number): void;
    updatezIndex(): void;
    updateChildrenDeep(recursive?: boolean): void;
    /**
     * 获取所有子对象
     */
    getChildren(): DisplayObject[];
    /**
     * 是否拥有子对象
     */
    hasChild(child: DisplayObject): boolean;
    hasChildren(): boolean;
    /**
     * 从父容器中移除
     */
    removeFromParent(): this;
    /**
     * 方法已过时，使用removeFromParent()来替代
     */
    remove(): this;
    /**
     * 一次性增加多个对象, 比单个增加速度快多，数量越多越明显！
     *
     * 但是：互为子节点、重复添加的情形需要开发者来确保避免。
     */
    addChilds(childs: Array<DisplayObject>): void;
    /**
     * 移除一个子对象
     */
    removeChild(child: DisplayObject): this;
    /**
     * 移除多个子对象
     */
    removeChilds(childs: Array<DisplayObject>): this;
    /**
     * 移除所有子对象
     */
    removeAllChild(): this;
    replaceChild(child: any, newChild: any): void;
    getPaintedAABBInLayer(): Rectangle;
    getChildrenAABB(recursive: any, deep: any): Rectangle;
    /**
     * 获取'root'对象, 沿着parent一直向上追溯
     */
    getRoot(): this;
    /**
     * 将一个stage坐标转换到本地坐标系
     * @param  x
     * @param  y
     */
    stageToLocalXY(x: any, y: any): {
        x: number;
        y: number;
    };
    /**
     * 将一个本地坐标转到stage坐标系
     * @param  x
     * @param  y
     */
    toStageXY(x: any, y: any): {
        x: number;
        y: number;
    };
    /**
     * 将一个本地坐标转到Layer坐标系
     * @param  x
     * @param  y
     */
    toLayerXY(x: any, y: any): {
        x: number;
        y: number;
    };
    toObjectLocalXY(x: any, y: any, object: any): any;
    addInLink(link: any): void;
    addOutLink(link: any): void;
    removeInLink(link: any): void;
    removeOutLink(link: any): void;
    /**
     * 获取所有连接到本对象的Link
     */
    getLinks(): Array<DisplayObject>;
    getOBB(minDeep?: number): OBB;
    getK(segIndex: number, t: number): number;
    upgradeLinks(): void[];
    /**
     * 是否超出了父节点的矩形区域
     */
    isOutOfParent(): boolean;
    getTopFrozenParent(): any;
    getAncestors(): any[];
    isAncestors(child: DisplayObject): boolean;
    /**
     * 将自己和下面所有子类递归式的展开，并生成一个 map:[key: id, value: DisplayObject]
     */
    toIdMap(): Map<number, DisplayObject>;
    _destory(): void;
    static flatten(arr: Array<any>, cond?: Function): any[];
    static getNoChildrensObjects(arr: Array<DisplayObject>): any[];
    static getAABB(arr: Array<DisplayObject>, recursive: boolean, deep: any): Rectangle;
}
export declare function getChildrenAABB(obj: DisplayObject, recursive: any, deep?: any): Rectangle;
export { DisplayObject as default };
