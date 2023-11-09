import { DisplayObject, Node, Link, Endpoint, Intersect } from '@jtopo/core';
import AnchorPoint from './AnchorPoint';
import Editor from './Editor';
declare class AnchorBox extends Node {
    editor: Editor;
    anchorDist: number;
    nodeDist: number;
    ctrlIntersectNode: Node;
    target?: DisplayObject;
    intersect: any;
    constructor(editor: Editor, x?: number, y?: number, w?: number, h?: number);
    mouseoutStageHandler(event: any): void;
    mouseenterStageHandler(event: any): void;
    clearTarget(): void;
    setTarget(obj: any, activeName?: any): void;
    activePoint(name: any): void;
    setIntersect(intersect?: Intersect): void;
    update(): void;
    createAnchorPoint(name: any): AnchorPoint;
    getAnchorPointBy(obj: any, name: any): DisplayObject;
    getObjectsIntersect(nodeOrLinks: Array<DisplayObject>): any;
    getConnectInfo(link: Link, obj: DisplayObject, end: DisplayObject): Endpoint;
}
export { AnchorBox as default };
