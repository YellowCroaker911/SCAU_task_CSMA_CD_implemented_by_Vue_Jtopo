import { ConnectPosition, LinkDirection, PointLike } from '../jtopo_type';
import { Link } from '../Link';
import { Node } from '../Node';
import InputSystem from '../InputSystem';
/**
 * 弧线
```js
// 例如:
import {AutoFoldLink} from "@jtopo/core";

let link = new CurveLink('text', 开始对象, 结束对象, 开始端点, 结束端点);

// 示例1
let link = new CurveLink();
link.text = 'text';
link.setBegin(开始对象, 端点);
link.setEnd(结束对象, 端点);

// 示例2
let link = new CurveLink('text', beginNode, endNode);
let link = new CurveLink('text', beginNode, endNode, 'center', 'center');
let link = new CurveLink('text', beginNode, {x: 10, y:20}, 'center');
let link = new CurveLink('text', {x: 10, y:20}, endNode, 'center');
let link = new CurveLink('text', {x:0, y:0}, {x: 10, y:20});
```
 */
export declare class CurveLink extends Link {
    className: any;
    ctrlPoint: any;
    _ctrlPoint: any;
    /**
     * 方向，有垂直、水平两种 取值为：'horizontal' 或者 'vertical' ，默认为 'horizontal'
     */
    direction: LinkDirection;
    constructor(text?: string, begin?: Node | Link | PointLike, end?: Node | Link | PointLike, beginEndpointName?: ConnectPosition, endEndpointName?: ConnectPosition);
    drawPoints(ctx: any, points: any): void;
    mousedragHandler(inputSystem: InputSystem): void;
    /**
     * 获取控制点的坐标
     */
    getCtrlPoint(a: any, z: any): any;
    getPoint(t: number): PointLike;
    resetCtrlPoint(): void;
}
export { CurveLink as default };
