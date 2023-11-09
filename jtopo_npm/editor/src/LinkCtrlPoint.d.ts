import { InputSystem, CircleNode } from '@jtopo/core';
import LinkCtrlBox from './LinkCtrlBox';
import Editor from './Editor';
declare class LinkCtrlPoint extends CircleNode {
    editor: Editor;
    linkCtrlBox: LinkCtrlBox;
    isConnectPoint: boolean;
    fillColor: string;
    canConnectEndpoint: any;
    constructor(linkCtrlBox: LinkCtrlBox);
    active(): void;
    unActive(): void;
    mousemoveHandler(): void;
    mousedownHandler(inputSystem: any): void;
    mousedragHandler(inputSystem: InputSystem): void;
    mouseupHandler(event: any): void;
}
export { LinkCtrlPoint as default };
