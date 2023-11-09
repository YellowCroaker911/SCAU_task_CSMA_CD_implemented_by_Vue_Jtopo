import Renderer from './Renderer';
import Stage from './Stage';
import { DisplayObject } from './DisplayObject';
import { BehaviourSystem } from '../behaviours/BehaviourSystem';
import Layer from './Layer';
import { StyleSystem } from './StyleSystem';
declare class CanvasRender extends Renderer {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    stage: Stage;
    styleSystem: StyleSystem;
    behaviourSystem?: BehaviourSystem;
    destoryed: boolean;
    constructor();
    /**
     * @Overwrite
     * @param {Layer} layer
     */
    setLayer(layer: any): void;
    /**
     * @Overwrite
     */
    dispose(): void;
    renderLayer(layer: any): void;
    private isOutOfCanvas;
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
export { CanvasRender as default };
