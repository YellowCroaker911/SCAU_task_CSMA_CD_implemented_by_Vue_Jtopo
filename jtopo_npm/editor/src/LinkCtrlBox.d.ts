import { Node, Link, InputSystem, Style } from '@jtopo/core';
import LinkCtrlPoint from './LinkCtrlPoint';
import Editor from './Editor';
declare class LinkCtrlBox extends Node {
    editor: Editor;
    ctrlPointStyle: Style;
    attachedLink?: Link;
    anchorNameStr?: string;
    ctrlPointInfo: any;
    constructor(editor: Editor);
    mouseoutStageHandler(inputSystem: InputSystem): void;
    mouseenterStageHandler(inputSystem: InputSystem): void;
    createNodeResizePoint(name: string): LinkCtrlPoint;
    init(): void;
    draw(ctx: any): void;
    updateSize(): void;
    updateCtrlPoints(link: Link): void;
    hideAllPoint(): void;
    updateFllow(): void;
    attachTo(link: Link): void;
    isPoint(obj: any): boolean;
}
export { LinkCtrlBox as default };
