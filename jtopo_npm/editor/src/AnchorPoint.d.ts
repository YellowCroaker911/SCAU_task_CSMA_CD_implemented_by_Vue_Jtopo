import { Stage, Link, InputSystem, CircleNode, Endpoint, Intersect } from '@jtopo/core';
import AnchorBox from './AnchorBox';
import Editor from './Editor';
declare class AnchorPoint extends CircleNode {
    anchorBox: AnchorBox;
    editor: Editor;
    stage: Stage;
    intersect?: Intersect;
    isActive: boolean;
    link?: Link;
    endpoint?: Endpoint;
    constructor(anchorBox: any, x?: number, y?: number, w?: number, h?: number);
    setIntersect(intersect: Intersect): void;
    mouseenterHandler(event: any): void;
    mouseoutHandler(event: any): void;
    mousedownHandler(event: any): void;
    mousedragHandler(inputSystem: InputSystem): void;
    mouseupHandler(inputSystem: InputSystem): void;
    draw(ctx: any): void;
    active(): void;
    unactive(): void;
}
export { AnchorPoint as default };
