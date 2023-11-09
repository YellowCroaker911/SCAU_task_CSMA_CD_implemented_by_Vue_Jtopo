import { EventTarget } from '@jtopo/core';
declare class DebugPanel extends EventTarget {
    stage: any;
    domElement: any;
    constructor(stage: any);
    initDom(): this;
    hide(): this;
    show(obj: any): this;
}
export { DebugPanel as default };
