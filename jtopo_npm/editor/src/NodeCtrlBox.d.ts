import { Node, InputSystem } from '@jtopo/core';
declare class NodeCtrlBox extends Node {
    editor: any;
    currNode: any;
    constructor(editor: any, x?: number, y?: number, w?: number, h?: number);
    mouseoutStageHandler(inputSystem: InputSystem): void;
    mouseenterStageHandler(inputSystem: InputSystem): void;
    initCtrlPoint(node: any): void;
    createCtrlPoint(name: any): any;
    attachTo(node: any): void;
    updateSize(): void;
    initPoints(): void;
    viewClone(target: any): void;
}
export { NodeCtrlBox as default };
