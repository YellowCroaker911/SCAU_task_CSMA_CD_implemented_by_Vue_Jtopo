import { Link } from '../Link';
import { ConnectPosition, PointLike } from '../jtopo_type';
import { Node } from '../Node';
/**
 * 弧线
 *
 * 例如:
```js
import {ArcLink} from "@jtopo/core";

let link = new ArcLink('text', 开始对象, 结束对象, 开始端点, 结束端点);

// 示例1
let link = new ArcLink();
link.text = 'text';
link.setBegin(开始对象, 端点);
link.setEnd(结束对象, 端点);

// 示例2
let link = new ArcLink('text', beginNode, endNode);
let link = new ArcLink('text', beginNode, endNode, 'center', 'center');
let link = new ArcLink('text', beginNode, {x: 10, y:20}, 'center');
let link = new ArcLink('text', {x: 10, y:20}, endNode, 'center');
let link = new ArcLink('text', {x:0, y:0}, {x: 10, y:20});
```
 */
export declare class ArcLink extends Link {
    className: 'ArcLink';
    /**
     * 方向
     *
     * 顺时针：clockwise
     * 逆时针：anticlockwise
     */
    direction: 'clockwise' | 'anticlockwise';
    constructor(text?: string, begin?: Node | Link | PointLike, end?: Node | Link | PointLike, beginEndpointName?: ConnectPosition, endEndpointName?: ConnectPosition);
    drawPoints(ctx: any, points: any): void;
    _OBBPoints(): PointLike[];
    getPoint(rate: any, segIndex?: number): PointLike;
    updatePoints(): any[];
}
export { ArcLink as default };
