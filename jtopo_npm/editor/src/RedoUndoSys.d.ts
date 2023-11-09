import Editor from "./Editor";
declare const Operations: {
    cut: string;
    copy: string;
    delete: string;
    modify: string;
    addChild: string;
    pasteCopy: string;
    pasteCut: string;
    resize: string;
    rotate: string;
    dragNodeOrLink: string;
    modifyLink: string;
};
declare class Operation {
    editor: Editor;
    type: string;
    undoFn?: Function;
    redoFn?: Function;
    constructor(type: string, redoFn: any, undoFn: any);
    redo(): void;
    undo(): void;
}
declare class RedoUndoSys extends EventTarget {
    editor: Editor;
    undoHistory: Array<Operation>;
    redoHistory: Array<Operation>;
    constructor(editor: Editor);
    push(type: string, redoFn?: Function, undoFn?: Function): Operation;
    undo(): Operation;
    redo(): Operation;
    undoAll(timeout?: number): void;
    redoAll(timeout?: number): void;
}
export { RedoUndoSys as default, Operations };
