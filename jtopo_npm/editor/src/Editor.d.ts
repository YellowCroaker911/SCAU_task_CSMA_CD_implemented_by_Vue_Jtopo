import { Layer, Stage, EventTarget, HandlerLayer, SelectedGroup, Keyboard, DisplayObject, InputTextfield, PopupMenu, Link, InputSystem, InputEvent, Tooltip, PointLike } from '@jtopo/core';
import NodeCtrlBox from './NodeCtrlBox';
import LinkCtrlBox from './LinkCtrlBox';
import AnchorBox from './AnchorBox';
import ClipBoard from './ClipBoard';
import { RedoUndoSystem } from './RedoUndoSystem';
import ActiveBox from './ActiveBox';
import { EditEvent } from './EditEvent';
export declare let openEvent: EditEvent;
export declare let saveEvent: EditEvent;
export declare let cutEvent: EditEvent;
export declare let copyEvent: EditEvent;
export declare let pasteEvent: EditEvent;
export declare let createEvent: EditEvent;
export declare let deleteEvent: EditEvent;
/**
 * 编辑器
 */
export declare class Editor extends EventTarget {
    /**
     * Stage对象
     */
    stage: Stage;
    handlerLayer: HandlerLayer;
    /**
     * 当前Layer（目前只支持一个Layer）
     */
    currentLayer: Layer;
    /**
     * 快捷键配置
     */
    KeysConfig: {
        CtrlOrCmd: string;
        CreateGroup: string;
        DropTo_leader: string;
        Delete: string[];
        Select_all: string[];
        Select_invert: string[];
        Cut: string[];
        Copy: string[];
        Paste: string[];
        Save: string[];
        Open: string[];
        Undo: string[];
        Redo: string[];
        Copy_style: string[];
        paste_Style: string[];
        Move_up: string[];
        Move_down: string[];
        Move_left: string[];
        Move_right: string[];
        Layout_tree: string[];
        Layout_grid: string[];
    };
    /**
     * 当前选中的对象组
     */
    selectedGroup: SelectedGroup;
    keyboard: Keyboard;
    clipBoard: ClipBoard;
    cssClipBoard: ClipBoard;
    nodeCtrlBox: NodeCtrlBox;
    linkCtrlBox: LinkCtrlBox;
    anchorBox: AnchorBox;
    activeBox: ActiveBox;
    /**
     * 弹出菜单对象
     */
    popupMenu: PopupMenu;
    /**
     * 当前鼠标操作的一个对象
     */
    pickedObject?: DisplayObject;
    mouseOverTarget?: DisplayObject;
    controlTarget?: any;
    inputTextfield: InputTextfield;
    redoUndoSys: RedoUndoSystem;
    textInputMode: boolean;
    opTooltip: Tooltip;
    /**
     * 当前鼠标划线的类名称, 默认：AutoFoldLink ，可以修改成其它Link的类名称如: "Link"、"FoldLink"
     */
    LinkClassName: string;
    recordName?: string;
    lastLayerState?: any;
    /**
     * 每一次画出的线的默认属性配置
     */
    newLinkProperties?: any;
    static KeysConfig: {
        CtrlOrCmd: string;
        CreateGroup: string;
        DropTo_leader: string;
        Delete: string[];
        Select_all: string[];
        Select_invert: string[];
        Cut: string[];
        Copy: string[];
        Paste: string[];
        Save: string[];
        Open: string[];
        Undo: string[];
        Redo: string[];
        Copy_style: string[];
        paste_Style: string[];
        Move_up: string[];
        Move_down: string[];
        Move_left: string[];
        Move_right: string[];
        Layout_tree: string[];
        Layout_grid: string[];
    };
    rulerW?: Link;
    rulerS?: Link;
    guildlineW?: Link;
    guildlineS?: Link;
    /**
     *
     * @param {Stage} stage
     */
    constructor(stage: Stage);
    /**
     * 获取当前Layer
     * @returns {Layer}
     */
    getCurrentLayer(): Layer;
    defineKeys(config: any): void;
    /**
     * 画布中间显示提示信息-很短暂停留后消失
     * @param {String} msg
     */
    showOpTooltip(msg: any): void;
    /**
     * 显示辅助线
     * @param origin
     */
    showGuildLine(origin: InputSystem | PointLike): void;
    hideGuidLine(): void;
    enterTextInputMode(): void;
    leaveTextInputMode(): void;
    /**
     * 保存到浏览器缓存
     */
    saveHandler(event: any): void;
    /**
     * 从浏览器缓存中打开最后一次的保存
     */
    openLasted(): void;
    /**
     * 执行一次撤销
     */
    undoHandler(): void;
    /**
     * 执行一次重做
     */
    redoHandler(): void;
    copyHandler(): void;
    cutHandler(): void;
    pasteHandler(): void;
    deleteHandler(): void;
    styleCopyHandler(): void;
    stylePasteHandler(): void;
    alignHandler(align: any): void;
    hideCtrlBox(): void;
    dblclickHandler(event: any): void;
    mousewheelHandler(event: any): void;
    mousedownHandler(event: any): void;
    mouseupHandler(event: any): void;
    mousedragHandler(event: any): void;
    mousemoveHandler(event: any): void;
    selectedGroupDragHandler(event: InputEvent, objects: any): void;
    selectedGroupDragEndHandler(event: InputEvent, objects: any): void;
    recordInterrupt(): void;
    record(recordName: string): void;
    recordEnd(recordName: string): void;
    mouseenterHandler(inputSystem: InputSystem): void;
    mouseoutHandler(event: any): void;
    onLinkCreate(link: any): void;
    newLink(text: any, beginObject: any, mousePoint: any, beginEndpoint: any): any;
    afterDeleteHandler(obj: any): any;
    addNewInstance(nodeOrLink: any): void;
    addLink(link: any): void;
    /**
     * 请求刷新
     */
    update(): void;
    updatezIndex(): void;
    /**
     * 生成json字符串
     */
    toJson(): string;
    /**
     * 打开一个json文档
     */
    openJson(json: any): void;
    showTip(msg1: any, msg2?: string): void;
    /**
     * 根据data生成一个图元实例
     * @param data
     */
    create(className: string): any;
    /**
     * 模拟一次按键,
     例如:
```
    editor.sendKey('Control+a'); // windows
    editor.sendKey('Meta+a'); // macos
    
    editor.sendKey('delete');

    editor.sendKey('Control+z'); // windows
    editor.sendKey('Meta+z'); // macos 撤销

```
     */
    sendKey(keyStr: string, event?: any): void;
}
export { Editor as default };
