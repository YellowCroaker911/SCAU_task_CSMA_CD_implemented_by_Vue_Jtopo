import DisplayObject from "./DisplayObject";
import { StyleOpt } from "./jtopo_type";
import Layer from "./Layer";
/**
 * 样式系统
```js
    // 设置’主题‘，系统目前自带了两个，在系统初始时可以设置一次
    stage.styleStyle.setTheme('DefaultDark');
    stage.styleStyle.setTheme('DefaultLight');

    // 定义一个样式
    stage.styleSystem.defClass('.active', {
        color: 'red',
        font: '10px sans-serif'
    });

    // 使用
    node.addClass('.active');
    link.addClass('.active');

    node.removeClass('.active');
```
 */
export declare class StyleSystem {
    styleClass: any;
    stage: any;
    /**
     * 主题名称
     */
    themeName: string;
    /**
     * 系统默认的选中外观颜色（节点选中时的矩形框的颜色、连线被选中时的阴影颜色）
     */
    selectedStyle: string;
    constructor(stage: any);
    toPojo(): any;
    fromPojo(pojo: any): void;
    /**
     * 定义一个样式
     *
     * @param name
     * @param styleOpt
     */
    defClass(name: string, styleOpt: StyleOpt): void;
    getClass(name: string): any;
    /**
     * 设置主题
     * @param themeName 名称
     */
    setTheme(themeName: string): void;
    _computeLayer(layer: Layer): void;
    _computeStyle(obj: DisplayObject): void;
}
