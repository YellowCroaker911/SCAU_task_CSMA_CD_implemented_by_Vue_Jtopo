import CanvasRender from "./CanvasRenderer";
import Stage from "./Stage";
/**
 * 导出系统，可以导出为图片、导出并下载图片、导出json文件
 */
export declare class ExporterSystem {
    render: CanvasRender;
    stage: Stage;
    constructor(stage: Stage);
    /**
     * 导出图片
     */
    saveAsLocalImage(): void;
    /**
     * 导出成图片，并在浏览器新标签页打开
     */
    saveImageInfo(): void;
    /**
     * 下载为json文件
     * @param fileName
     */
    download(fileName: string): void;
    _exportPaint(): void;
    saveDataAsFile(data: any, filename: any): void;
}
