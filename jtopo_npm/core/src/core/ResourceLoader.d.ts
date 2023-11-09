import EventTarget from "./EventTarget";
declare class ResourceLoaderBase extends EventTarget {
    w: any;
    lastResource: any;
    hasLoaded: any;
    clearCache(): void;
    loadImage(imageOrUrl: any, callback: any): void;
}
export declare var ResourceLoader: ResourceLoaderBase;
export { ResourceLoader as default };
