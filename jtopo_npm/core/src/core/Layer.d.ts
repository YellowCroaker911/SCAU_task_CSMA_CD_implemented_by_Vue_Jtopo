import { DisplayObject } from './DisplayObject';
import Rectangle from './Rectangle';
import Stage from './Stage';
import { Axis } from './Axis';
import { Node } from './Node';
import CanvasRender from './CanvasRenderer';
import { StyleOpt } from './jtopo_type';
import { InputSystem } from '../exports';
/**
 * 只用作展示的层，每个层对应一个Canvas. 只有加入到Layer中的对象(Node、Link及其子类的实例），才可能被绘制并显示出来.
```js

// 创建
let layer = new Layer('myLayer');
stage.addChild(layer);

// 常用方法

// 添加对象
layer.addChild(node);
layer.addChilds([node1, node2, link1, link2, node3]);

// 查找对象
let node = layer.querySelector('Node[name="node1"]');
let nodes = layer.querySelectorAll('.myClass');
let link = layer.querySelector('[text="myLink"]');

// 鼠标信息
let x = layer.mouseX;

// 设置背景
// 颜色
layer.css({
    background: 'gray'
});

// 图片
layer.css({
    background: 'url(./assets/img/blue_bg.png) no-repeat',
    backgroundSize: '100% 100%'
});

```
 */
export declare class Layer extends Node {
    className: string;
    isLayer: boolean;
    stage: Stage;
    render: CanvasRender;
    /**
     * 序列化属性列表
    */
    serializers: Array<string>;
    /** canvas矩形到Layer的投影 */
    viewportRect: Rectangle;
    /**
     * 绘制时是否裁减掉画布外的节点
     */
    cuttingHide: boolean;
    /**
     * 绘制在当前画布上对象列表
     */
    displayList: Array<DisplayObject>;
    /** 是否响应鼠标缩放 */
    wheelZoom: boolean;
    /**
     * 坐标轴，默认隐藏
     */
    axis: Axis;
    /**
     * 鼠标在Layer中的坐标x
     */
    mouseX: number;
    /**
     * 鼠标在Layer中的坐标y
     */
    mouseY: number;
    /**
     * 缩放最大极限, 默认最大能放大10倍
```
    //例如：限制最大能缩放2倍
    layer.zoomMaxLimit = {x: 2, y:2};
```
     */
    zoomMaxLimit: {
        x: number;
        y: number;
    };
    /**
     * 缩放最小极限，默认最小能缩放到原来的十分之一
```
    //例如：限制最小能缩放到原来的一半
    layer.zoomMminLimit = {x: 0.5, y:0.5};
```
     */
    zoomMinLimit: {
        x: number;
        y: number;
    };
    _frames: number;
    get frames(): number;
    set frames(v: number);
    _requestReapint: boolean;
    _layerIndex: string;
    _dragDrawDelay: boolean;
    _bgInfo: any;
    /**
     * @param {String} name 名字
     */
    constructor(name?: string);
    update(): boolean;
    /**
     * 显示坐标轴
     */
    showAxis(): void;
    /**
     * 隐藏坐标轴
     */
    hideAxis(): void;
    setRender(render: CanvasRender): void;
    _paintPrepare(): boolean;
    getViewportRectInLayer(): Rectangle;
    /**
     * 生成json
     */
    toFileJson(): string;
    /**
     * 清空当前画布并加载json内容
     * @param json
     */
    openJson(json: string): void;
    /**
     * 运行脚本
     * @param f
     */
    runScript(f: Function): void;
    updateViewRect(): Rectangle;
    updateSize(w: any, h: any): void;
    pickUpChild(pickMouseDisabled?: boolean): DisplayObject;
    pickUpByRect(boxRect: any): any[];
    translateWith(x: any, y: any): this;
    _calcBackgroundPosition(): void;
    css(styleOpt: StyleOpt): this;
    getAABB(recursive?: boolean): Rectangle;
    /**
     * 显示
     */
    show(): this;
    /**
     * 隐藏
     * @returns
     */
    hide(): this;
    /**
     * @override
     */
    _OBBPoints(): {
        x: number;
        y: number;
    }[];
    getPoints(): {
        x: number;
        y: number;
    }[];
    draw(ctx: any): void;
    zoom(x: number, y: number, cx?: number, cy?: number): this;
    cancelZoom(): void;
    /**
     * 强制立即重绘一次，绝大多数情况下应该使用update方法，该方法特殊情况下才可能被用到
     */
    forceUpdate(): void;
    /**
     * 该方法已过时，未来版本不再支持, 请使用css方法
     * @deprecated
     */
    setBackground(background: any, backgroundSize: any): void;
    /**
     * 已过时，请使用：querySelectorAll()替代
     * 根据属性来查找Layer中的对象
     * <p>例如：layer.find('text', 'node_3'); 会返回对象的text属性是 'node_3'的所有对象 </p>.
     * <p>例如：layer.find('isNode', true); 会返回所有Node对象 </p>.
     * <p>例如：layer.find('isLink', true); 会返回所有Link对象 </p>.
     * @deprecate
     * @param name 属性名称
     * @param value 属性值
     * @param recursive 是否递归查找下级子节点
     */
    find(name: string, value: any, recursive?: boolean): DisplayObject[];
    toStageAABB(aabbInLayer: Rectangle): Rectangle;
    toLayerRect(rect: Rectangle): Rectangle;
    dragHandle(inputSystem: InputSystem): void;
    updateCanvasOffset(dx: number, dy: number): void;
    setDrawDelay(isDelay: boolean): void;
    dragEndHandler(): void;
    addChild(child: any): this;
    addChilds(childs: any): void;
    /**
     * 将指定对象的中心放到画布中央
     * @param obj 可为null
     */
    centerBy(obj?: DisplayObject | Array<DisplayObject>): void;
    _restoreBackground(style: any): void;
    _reloadJsonTest(): string;
    getAllVisiable(): any[];
    /**
     * 开始循环渲染
     */
    loopRender(frames?: number): void;
    _destory(): void;
}
export { Layer as default };
