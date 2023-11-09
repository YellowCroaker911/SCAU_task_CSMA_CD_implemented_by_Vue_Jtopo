import Renderer from './Renderer';
import Stage from './Stage';
import { DisplayObject } from './DisplayObject';
import Layer from './Layer';
import { StyleSystem } from './StyleSystem';
declare class CanvasRenderer extends Renderer {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    stage: Stage;
    styleSystem: StyleSystem;
    destoryed: boolean;
    constructor(layer?: Layer);
    /**
     * @Overwrite
     */
    dispose(): void;
    renderLayer(layer: Layer): void;
    private isOutOfViewPort;
    private _paintNodeOrLinkPrepare;
    overviewPaint(obj: Layer): DisplayObject;
    exportPaint(obj: Layer): DisplayObject;
    paint(obj: DisplayObject, isOverview?: boolean, isExport?: boolean): DisplayObject;
    private _paintChildren;
    private paintSelected;
    clearAll(): void;
    private dontNeedPickup;
    isMouseInObjectAABB(obj: DisplayObject): boolean;
    isMouseInStroke(pickRadius: any, path: any): boolean;
    isMouseInPath(path2d: any): boolean;
    private contextExtends;
    private paintAABB;
    private paintOBB;
    show(): void;
    hide(): void;
    getWidth(): number;
    getHeight(): number;
    setSize(w: any, h: any): void;
    getCursor(): string;
    setCursor(cursor: any): void;
    getImage(type?: string, quality?: any): string;
    getRectImageData(x: any, y: any, w: any, h: any): ImageData;
    private paintAxis;
    clear(): void;
}
export { CanvasRenderer as default };
