import Stage from './Stage';
/**
 * 缩略图对象
 */
declare class Overview {
    /**
     * 是否可见
     */
    visible: boolean;
    stage: Stage;
    domElement: HTMLCanvasElement;
    dirty: boolean;
    private rectObj;
    private _updateTimer;
    private render;
    private canvas;
    private layersAABBRect;
    private inputSystem;
    private _overviewTimer;
    /**
     * 内置对象，用户无法创建
     */
    constructor(stage: Stage);
    /**
     * @override
     * @param domStyle
     * @returns
     */
    css(domStyle: any): this;
    initEvent(): void;
    /**
     * 显示
     */
    show(): this;
    /** 隐藏
     */
    hide(): this;
    /**
     * 获得宽度
     * @returns {Number}
     */
    getWidth(): number;
    /** 获得高度
     * @returns {Number}
     */
    getHeight(): number;
    /**
     * 设置缩略图的尺寸
     */
    setSize(w: number, h: number): void;
    private getLayersAABBRect;
    private paint;
    private paintDragRect;
    /**
     * 更新绘制一次
     */
    update(): void;
    mousedownHandler(): void;
    mousedragHandler(): void;
    private moveWith;
    mousewheelHandler(e: any): void;
    mousemoveHandler(): void;
    mouseupHandler(): void;
}
export { Overview as default };
