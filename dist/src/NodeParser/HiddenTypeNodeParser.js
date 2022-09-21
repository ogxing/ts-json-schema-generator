"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiddenNodeParser = void 0;
const NeverType_1 = require("../Type/NeverType");
const isHidden_1 = require("../Utils/isHidden");
class HiddenNodeParser {
    constructor(typeChecker) {
        this.typeChecker = typeChecker;
    }
    supportsNode(node) {
        return (0, isHidden_1.isNodeHidden)(node);
    }
    createType(_node, _context) {
        return new NeverType_1.NeverType();
    }
}
exports.HiddenNodeParser = HiddenNodeParser;
//# sourceMappingURL=HiddenTypeNodeParser.js.map