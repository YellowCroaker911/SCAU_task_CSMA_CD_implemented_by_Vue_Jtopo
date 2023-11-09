import { Link } from '../Link';
import { ConnectPosition, PointLike } from '../jtopo_type';
import { Node } from '../Node';
/**
 * 贝塞尔曲线
 *
```js
// 例如:
import {BezierLink} from "@jtopo/core";

let link = new BezierLink('text', 开始对象, 结束对象, 开始端点, 结束端点);

// 示例1
let link = new BezierLink();
link.text = 'text';
link.setBegin(开始对象, 端点);
link.setEnd(结束对象, 端点);

// 示例2
let link = new BezierLink('text', beginNode, endNode);
let link = new BezierLink('text', beginNode, endNode, 'center', 'center');
let link = new BezierLink('text', beginNode, {x: 10, y:20}, 'center');
let link = new BezierLink('text', {x: 10, y:20}, endNode, 'center');
let link = new BezierLink('text', {x:0, y:0}, {x: 10, y:20});
```
 */
export declare class BezierLink extends Link {
    className: any;
    ctrlPoint1?: PointLike;
    ctrlPoint2?: PointLike;
    private _ctrlPoint1;
    private _ctrlPoint2;
    constructor(text?: string, begin?: Node | Link | PointLike, end?: Node | Link | PointLike, beginEndpointName?: ConnectPosition, endEndpointName?: ConnectPosition);
    mousedragHandler(inputSystem: any): void;
    drawPoints(ctx: any, points: any): void;
    calcCtrlPoint1(a: any, z: any, mid: any): PointLike;
    calcCtrlPoint2(a: any, z: any, mid: any): PointLike;
    resetCtrlPoint(): void;
    getPoint(rate: any, segIndex: any): PointLike;
    updatePoints(): any[];
}
export { BezierLink as default };
