import EventTarget from './EventTarget';
import InputSystem from './InputSystem';
/**
 * 当前选中的对象组
 */
export declare class SelectedGroup extends EventTarget {
    /**
     * 当前被选中的对象集合,有Node、Link
     */
    objects: any[];
    private noChildrensObjects;
    isDraging: boolean;
    constructor();
    isEmpty(): boolean;
    mouseoutHandler(inputSystem: InputSystem): void;
    mousedragHandler(inputSystem: InputSystem): void;
    mousedragEndHandler(inputSystem: InputSystem): void;
    getNoChildrensObjects(): any[];
    addAll(childs: any): this;
    add(child: any): this;
    remove(child: any): this;
    removeAll(): this;
    has(child: any): boolean;
}
export { SelectedGroup as default };
