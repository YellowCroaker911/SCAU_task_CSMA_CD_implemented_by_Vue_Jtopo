import Layer from './Layer';
import { Node } from './Node';
import Stage from './Stage';
export declare class HandlerLayer extends Layer {
    className: string;
    controlTarget: any;
    _frames: number;
    zIndex: number;
    mouseX: number;
    mouseY: number;
    mouseDownX: number;
    mouseDownY: number;
    areaBox: Node;
    constructor(stage: Stage);
    mouseoutHandler(event: any): void;
    draw(ctx: CanvasRenderingContext2D): void;
}
export { HandlerLayer as default };
