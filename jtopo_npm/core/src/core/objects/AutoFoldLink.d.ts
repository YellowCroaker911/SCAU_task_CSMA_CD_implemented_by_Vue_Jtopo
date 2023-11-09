import Link from '../Link';
import { Node } from '../Node';
import { ConnectPosition, PointLike } from '../jtopo_type';
/**
 * 自动折线
 *
```js
// 例如:
import {AutoFoldLink} from "@jtopo/core";

let link = new AutoFoldLink('text', 开始对象, 结束对象, 开始端点, 结束端点);

// 示例1
let link = new AutoFoldLink();
link.text = 'text';
link.setBegin(开始对象, 端点);
link.setEnd(结束对象, 端点);

// 示例2
let link = new AutoFoldLink('text', beginNode, endNode);
let link = new AutoFoldLink('text', beginNode, endNode, 'center', 'center');
let link = new AutoFoldLink('text', beginNode, {x: 10, y:20}, 'center');
let link = new AutoFoldLink('text', {x: 10, y:20}, endNode, 'center');
let link = new AutoFoldLink('text', {x:0, y:0}, {x: 10, y:20});
```
 */
export declare class AutoFoldLink extends Link {
    className: any;
    beginOffsetGap: number;
    endOffsetGap: number;
    absorb: number;
    fold1Offset: any;
    fold2Offset: any;
    centerOffset: any;
    pointOffsets: any;
    _preAngle: any;
    constructor(text?: string, begin?: Node | Link | PointLike, end?: Node | Link | PointLike, beginEndpointName?: ConnectPosition, endEndpointName?: ConnectPosition);
    getFold1(a: any, z: any): {
        x: any;
        y: any;
    };
    getFold2(a: any, z: any): {
        x: any;
        y: any;
    };
    getFold1Vec(a: any, z: any): any;
    getFold2Vec(a: any, z: any): any;
    updatePoints(): any[];
    getMergedPoints(): any[];
    getWithOffset(p: any, pointIndex: any): any;
    setFold1Offset(dx: any, dy: any): void;
    setFold2Offset(dx: any, dy: any): void;
    setCenterOffset(dx: any, dy: any): void;
    resetOffset(): void;
}
export { AutoFoldLink as default };
