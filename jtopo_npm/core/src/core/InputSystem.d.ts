import DisplayObject from "./DisplayObject";
import { EventTarget } from "./EventTarget";
/**
 * 输入系统（管理鼠标信息和状态）
 */
export declare class InputSystem extends EventTarget {
    type: string;
    /**
     * 当前鼠标选中的对象
     * */
    pickedObject: DisplayObject | null;
    /**
     * 当前鼠标指向的对象
     */
    mouseoverTarget: DisplayObject | null;
    /**
     * 鼠标缩放开关，为false时，鼠标缩放将不起作用
     */
    wheelZoom: boolean;
    /**
     * 鼠标按下时的坐标（canvas坐标）
     */
    mouseDownX: number;
    /**
     * 鼠标松开时的坐标(canvas坐标)
     */
    mouseDownY: number;
    /**
     * 鼠标在场景中的坐标x(canvas左上角为0,0)
     */
    x: number;
    /**
    * 鼠标在场景中的坐标y(canvas左上角为0,0)
    */
    y: number;
    /**
     * 相对于上一次鼠标x的移动增量（canvas坐标）
     */
    dx: number;
    /**
     * 相对于上一次鼠标y的移动增量（canvas坐标）
     */
    dy: number;
    /**
     * 鼠标是否按下
     */
    isMouseDown: boolean;
    /**
     * 是否拖拽结束
     */
    isDragEnd: boolean;
    /**
     * 是否在拖拽中
     */
    isDraging: boolean;
    /**
     * 鼠标是否在画布上
     */
    isMouseOn: boolean;
    /**
     * 是否拖拽的开始
     */
    isDragStart: boolean;
    /**
     * 原始的事件对象
     */
    event: MouseEvent;
    /**
     * 上一次事件的状态记录
     */
    previous: any;
    private touchesDistance;
    private touchPoint1;
    private touchPoint2;
    private idleTimer;
    /**
     * 鼠标是否空闲
     */
    isIdle: boolean;
    /**
     * 鼠标空闲时间, 毫秒
     */
    idleTimeout: number;
    buttons: number;
    button: number;
    constructor();
    preventDefault(): void;
    /**
     * 是否右键
     * @returns
     */
    isRightButton(): boolean;
    update(event: any, type: any): void;
    _initEvent(stage: any): void;
    mockMouseEvent(canvas: any, type: any, x: any, y: any): void;
}
export { InputSystem as default };
