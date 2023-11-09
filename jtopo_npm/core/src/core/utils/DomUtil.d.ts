export declare function getXYInDom(canvas: any, event: any): {
    x: number;
    y: number;
};
export declare class DomUtil {
    static addEventListener(elem: any, type: any, listener: any): void;
    static getOffsetPosition(elem: any): {
        left: number;
        top: number;
    };
    static createVideo(videoSrc: any, callback: any): any;
    static fullWindow(domObj: any): void;
    static fullScreen(element: any): void;
    static isMobileDevice: boolean;
}
export { DomUtil as default };
