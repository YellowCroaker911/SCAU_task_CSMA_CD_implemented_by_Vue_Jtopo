import { DisplayObject } from './DisplayObject';
import Style from './Style';
import { SerializedJson, SerializedDisplayObject } from './jtopo_type';
export declare function toPojo(displayObjectArr: Array<DisplayObject>): SerializedJson;
export declare function uniqueStyles(pojo: SerializedJson): void;
export declare function diffToPojo(pojo: SerializedDisplayObject, object: DisplayObject | Style, serializers: Array<string>): void;
