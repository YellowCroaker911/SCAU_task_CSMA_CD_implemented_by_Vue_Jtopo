import EventTarget from './EventTarget';
import Stage from './Stage';
/**
 * 键盘抽象
 *
 * 示例：
```js
    keyboard.bindKey('Shift+a', ()=> {
        console.log('shift+a');
    });
```
 */
export declare class Keyboard extends EventTarget {
    stage: Stage;
    /**
     * 调试开关，如果设置为true，会在控制台输出按键信息
     */
    debug: boolean;
    regMap: {
        [x: string]: Function;
    };
    keyMap: {
        [x: string]: boolean;
    };
    preKeydownEvent: any;
    constructor(stage: Stage);
    /**
     *
     * 绑定按键
     * @param {String} keyInfo 例如"Control+a" 、"Meta+a"、 ”G" 、”Shift+1“
     * @param {Function} callback 触发处理函数
     */
    bindKey(keyInfo: string, fn: Function): void;
    /**
     * 解绑按键
     * @param {String} keyInfo 例如"Control+a" 、"Meta+a"、 ”G" 、”Shift+1“
     * */
    unBind(keyInfo: string): void;
    /**
     * 指定的单个键是否按下
     * @param {String} keyInfo
     * @returns {Boolean}
     */
    isKeydown(keyInfo: string): boolean;
    sendKey(keyStr: string, event: any): void;
    isMouseOnInputDomElement(): boolean;
    fireKey(keyArray: any, event: any, isMouseOn: any): void;
    keydownHandler(event: any): void;
    keyupHandler(event: any): void;
    init(): void;
}
export { Keyboard as default };
