/**
 * create: 创建Node或Link
 */
export type EditOperator = 'delete' | 'copy' | 'cut' | 'paste' | 'save' | 'open' | 'create';
export declare class EditEvent {
    type: EditOperator;
    constructor(type: EditOperator);
}
