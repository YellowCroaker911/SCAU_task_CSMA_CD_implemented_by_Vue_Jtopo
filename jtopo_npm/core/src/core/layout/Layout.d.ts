import { AnimationOption, AnimationSystem } from '../Animation';
import { PointLike } from '../jtopo_type';
import { Node } from '../Node';
export declare class LayoutBase {
    animationSystem: AnimationSystem;
    objects: Array<Node>;
    positions: Array<PointLike>;
    positionNormals: Array<PointLike>;
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    width: number;
    height: number;
    rotation: number;
    constructor(objects: Array<Node>, positions: Array<PointLike>);
    resizeTo(width: number, height: number): void;
    translate(x: number, y: number): void;
    scale(sx: number, sy: number): void;
    rotate(rotation: number): void;
    doLayout(animationOption: AnimationOption): this;
}
