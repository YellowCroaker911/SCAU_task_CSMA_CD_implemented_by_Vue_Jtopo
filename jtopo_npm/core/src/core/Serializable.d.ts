import { DisplayObject } from './DisplayObject';
import { SerializedJson } from './jtopo_type';
import Layer from './Layer';
import { Link } from './Link';
import { Node } from './Node';
export type Pojo = {
    [key: string]: any;
};
export declare class SerializerSystem {
    constructor();
    /**
     * 序列化时保留的小数点后的位数，如果为null，则不对数字做任何截取
     *
     * 默认保留小数点后6位数字
     */
    static numberFixed: number;
    toPojo(objArr: Array<DisplayObject>): SerializedJson;
    toJson(objArr: DisplayObject | Array<DisplayObject>): string;
    pojoToObjects(pojo: SerializedJson, objMap?: Map<number, DisplayObject>): Array<DisplayObject>;
    copyToPojo(displayObjectArr: Array<DisplayObject>): SerializedJson;
    static getEmptyInstance(className: string): Object;
    static getProtoDefaultProperties(obj: DisplayObject): {};
    /**
     *  将’组件‘json转成对象(Node或者Link)
     * @param componentJson
     * @returns
     */
    componentToObjects(componentJson: string): Array<Node | Link>;
    /**
     * 对象列表转成json 成为’组件‘
     * @param objArr
     * @returns
     */
    objectsToComponent(objArr: Array<Node | Link>): string;
    getState(obj: DisplayObject): SerializedJson;
    fillByJson(layer: Layer, json: string): this;
    restore(obj: DisplayObject, targetState: SerializedJson): SerializedJson;
}
