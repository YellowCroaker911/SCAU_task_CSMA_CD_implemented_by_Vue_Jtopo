import { Transformable } from './Interfaces';
import { PointLike } from './jtopo_type';
/**
 * 变换矩阵
 */
export declare class Transform implements Transformable {
    m: Array<number>;
    constructor(m?: Array<number>);
    copy(): Transform;
    identity(): void;
    transform(scaleX: any, skewX: any, scaleY: any, skewY: any, x: any, y: any): void;
    point(point: PointLike): {
        x: number;
        y: number;
    };
    vec(x: number, y: number): {
        x: number;
        y: number;
    };
    points(points: any): any[];
    translate(x: any, y: any): this;
    translateTo(x: any, y: any): this;
    scale(sx: any, sy: any): this;
    getScale(): {
        x: number;
        y: number;
    };
    rotate(rad: any): this;
    rotateTarget(rad: any, x: any, y: any): void;
    getTranslation(): {
        x: number;
        y: number;
    };
    getRotation(): number;
    multiply(matrix: any): this;
    invert(): this;
    getMatrix(): number[];
    setAbsolutePosition(x: any, y: any): this;
}
export { Transform as default };
