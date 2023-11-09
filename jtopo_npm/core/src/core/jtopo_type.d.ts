import { Point } from './Point';
/** 矩形方位 */
export type RectPosition = 'lt' | 'ct' | 'rt' | 'lm' | 'center' | 'rm' | 'lb' | 'cb' | 'rb';
/** 连接点 */
export type ConnectPosition = 'lt' | 'ct' | 'rt' | 'lm' | 'center' | 'rm' | 'lb' | 'cb' | 'rb' | 'nearest';
/** 文本对齐 */
export type TextAlign = 'start' | 'end' | 'left' | 'right' | 'center';
/** 文本基线 */
export type TextBaseline = 'top' | 'bottom' | 'middle' | 'alphabetic' | 'hanging';
/** Stage模式 */
export type StageModeType = 'normal' | 'drag' | 'edit' | 'view' | 'select';
/** 鼠标事件 */
export type MouseEventType = 'mousedown' | 'mouseup' | 'mousemove' | 'mouseenter' | 'mouseout' | 'mousewheel' | 'click' | 'dblclick';
export type DirectionType = 'up' | 'down' | 'left' | 'right';
export type RatioDirection = DirectionType;
export type LinkDirection = 'horizontal' | 'vertical';
/** Point对象或者拥有x、y的对象 */
export type PointLike = Point | {
    x: number;
    y: number;
};
export type EndpointOffset = number | PointLike;
/**
 * 坐标系类型
 */
export type CSType = 'geometric' | 'link';
export type Vec2 = [number, number];
/**
 * 序列化后的json格式
 */
export type SerializedJson = {
    version: string;
    Roots: Array<any>;
    CustomStyle: Object;
    Styles: Array<any>;
    Resources: Array<any>;
    Shapes: Array<any>;
    DisplayObjects: Array<SerializedDisplayObject>;
};
export type SerializedDisplayObject = {
    [key: string]: any;
    id: number;
    className: string;
    isLayer?: boolean;
    isLink?: boolean;
    isNode?: boolean;
    name?: string;
    parent?: number;
    image?: number;
    style?: number;
    shape?: any;
    begin?: {};
    end?: {};
    label?: number;
    beginArrow?: {};
    endArrow?: {};
};
export type StyleOpt = {
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
     * 文字行间距(不是很精确)
     */
    lineSpacing?: number;
    /**
     * 文字位置
     */
    textPosition?: string;
    /**
     * 文字颜色
     */
    color?: string;
    padding?: number;
    /**
     * 边框样式
     */
    borderStyle?: null | 'solid' | 'dashed' | 'dotted';
    /**
     * 边框颜色, 如: "gray", "rgb(1,0,0)", "#FF0000"
     */
    borderColor?: string;
    /**
     * 边框圆角, 如: 5
     */
    borderRadius?: number;
    backgroundRepeat?: any;
    backgroundColor?: any;
    lineHeight?: any;
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
    textOffsetX?: number;
    textOffsetY?: number;
};
