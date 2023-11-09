import { StyleOpt } from './jtopo_type';
/**
 * 样式对象
 */
export declare class Style {
    className: any;
    dirty: boolean;
    /**
     * 边框宽度
     */
    borderWidth?: number;
    /**
     * 整体透明度
     */
    globalAlpha?: number;
    /**
     * 绘制模式
     */
    globalCompositeOperation?: GlobalCompositeOperation;
    /**
     * 填充样式
     */
    fillStyle?: string | CanvasGradient | CanvasPattern;
    /**
    * 线条样式, 对于Node而言就是边框线条
    */
    strokeStyle?: string | CanvasGradient | CanvasPattern;
    /**
     * 阴影
     */
    shadowBlur?: number;
    /**
     * 阴影颜色
     */
    shadowColor?: string;
    /**
     * 阴影X方向的长度
     */
    shadowOffsetX?: number;
    /**
     * 阴影y方向的长度
     */
    shadowOffsetY?: number;
    /**
     * 文本水平偏移量
     */
    textOffsetX?: number;
    /**
     * 文本垂直偏移量
     */
    textOffsetY?: number;
    /**
     * lineCap
     */
    lineCap?: CanvasLineCap;
    /**
     * lineJoin
     */
    lineJoin?: CanvasLineJoin;
    /**
     * 线宽度
     */
    lineWidth?: number;
    miterLimit?: number;
    /**
     * 文字
     */
    font?: string;
    /**
     * 字体左右对齐方式
     */
    textAlign?: CanvasTextAlign;
    /**
     * 字体基线
     */
    textBaseline?: CanvasTextBaseline;
    /**
     * 虚线，例如[3,2]
     */
    lineDash?: Iterable<number>;
    /**
     * 虚线偏移量
     */
    lineDashOffset?: number;
    /**
     * 文字位置
     */
    textPosition?: string;
    /**
     * 文字颜色
     */
    color?: string;
    padding?: number;
    private paddingLeft;
    private paddingRight;
    private paddingTop;
    private paddingBottom;
    private _border;
    /**
     * 边框样式
     */
    borderStyle: null | 'solid' | 'dashed' | 'dotted';
    /**
     * 边框颜色, 如: "gray", "rgb(1,0,0)", "#FF0000"
     */
    borderColor: string;
    /**
     * 边框圆角, 如: 5
     *
     * 也支持支持数组: [0, 10, 20, 30]，四个角（比较老的浏览器可能不支持）
     */
    borderRadius: number | [number, number, number, number];
    private _background;
    backgroundSize: any;
    private _backgroundPosition;
    private _backgroundImage;
    backgroundWidth?: number;
    backgroundHeight?: number;
    private backgroundWidthRate?;
    private backgroundHeightRate;
    private backgroundPositionX;
    private backgroundPositionY;
    private backgroundPositionXName;
    private backgroundPositionYName;
    private backgroundPositionXRate;
    private backgroundPositionYRate;
    backgroundRepeat: any;
    backgroundColor: any;
    _backgroundImageObject: any;
    /**
     * 文字行高
     */
    lineHeight: any;
    /**
     * 边框, 如: solid 1px gray
     */
    border?: string;
    /**
     * 背景图片, 如："ulr('aaaaaa.aa.png')"
     */
    backgroundImage?: string;
    /**
     * 设置背景，如： "white url('./assets/img/grid.png') repeat",
     */
    background?: string;
    backgroundPosition?: string;
    _preState: any;
    _changed: any[];
    constructor(init?: Style | Object);
    isDirty(): boolean;
    getChanged(): Array<string>;
    updateState(): boolean;
    reset(): void;
    toPojo(): any;
    setStyles(style: any): void;
    merge(style: StyleOpt, obj?: any): void;
    set(name: any, value: any): void;
    getBackgroundRect(fillMaxWidth: any, fillMaxHeight: any, node: any): {
        x: number;
        y: number;
        width: any;
        height: any;
    };
    applyTo(ctx: any): void;
    calcGap(): number;
    static fromPojo(pojo: any): Style;
    /**
    * 测量字符串在某个样式下的尺寸（以下因素均可能影响结果：文本是否多行、字体、字号、行高）
    * @param lineCount text的行数
    */
    static measureText(text: string | Array<string>, style: Style, lineCount: number): {
        width: any;
        height: number;
        lineHeight: any;
    };
}
declare class LinearGradient {
    startX: number;
    startY: number;
    stopX: number;
    stopY: number;
    cache: boolean;
    colors: any[];
    constructor(startX: any, startY: any, stopX: any, stopY: any);
    addColorStop(offset: any, color: any): void;
    getGradient(ctx: any): any;
}
declare class RadialGradient {
    xStart: number;
    yStart: number;
    radiusStart: number;
    xStop: number;
    yStop: number;
    radiusEnd: number;
    colors: any[];
    constructor(xStart: any, yStart: any, radiusStart: any, xStop: any, yStop: any, radiusEnd: any);
    addColorStop(offset: any, color: any): void;
    getGradient(ctx: any): any;
}
declare class Pattern {
    image: any;
    pattern: any;
    repetition: any;
    constructor(image: any, repetitionStyle: any);
    getGradient(ctx: any): any;
}
export { Style as default, LinearGradient, RadialGradient, Pattern, };
