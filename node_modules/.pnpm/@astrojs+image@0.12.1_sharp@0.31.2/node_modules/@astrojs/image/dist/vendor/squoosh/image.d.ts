/// <reference types="node" />
import type { OutputFormat } from '../../loaders/index.js';
declare type RotateOperation = {
    type: 'rotate';
    numRotations: number;
};
declare type ResizeOperation = {
    type: 'resize';
    width?: number;
    height?: number;
};
export declare type Operation = RotateOperation | ResizeOperation;
export declare function processBuffer(buffer: Buffer, operations: Operation[], encoding: OutputFormat, quality?: number): Promise<Uint8Array>;
export {};
