import ts from "typescript";
import { Context, NodeParser } from "../NodeParser";
import { SubNodeParser } from "../SubNodeParser";
import { BaseType } from "../Type/BaseType";
export declare class ArrayNodeParser implements SubNodeParser {
    protected childNodeParser: NodeParser;
    constructor(childNodeParser: NodeParser);
    supportsNode(node: ts.ArrayTypeNode): boolean;
    createType(node: ts.ArrayTypeNode, context: Context): BaseType;
}
