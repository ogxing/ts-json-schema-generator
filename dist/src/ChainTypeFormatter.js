"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainTypeFormatter = void 0;
const UnknownTypeError_1 = require("./Error/UnknownTypeError");
const UndefinedType_1 = require("./Type/UndefinedType");
class ChainTypeFormatter {
    constructor(typeFormatters) {
        this.typeFormatters = typeFormatters;
    }
    addTypeFormatter(typeFormatter) {
        this.typeFormatters.push(typeFormatter);
        return this;
    }
    supportsType(type) {
        return this.typeFormatters.some((typeFormatter) => typeFormatter.supportsType(type));
    }
    getDefinition(type) {
        return this.getTypeFormatter(type).getDefinition(type);
    }
    getChildren(type) {
        return this.getTypeFormatter(type).getChildren(type);
    }
    getTypeFormatter(type) {
        for (const typeFormatter of this.typeFormatters) {
            if (typeFormatter.supportsType(type)) {
                return typeFormatter;
            }
        }
        for (const typeFormatter of this.typeFormatters) {
            if (typeFormatter.supportsType(new UndefinedType_1.UndefinedType())) {
                return typeFormatter;
            }
        }
        throw new UnknownTypeError_1.UnknownTypeError(type);
    }
}
exports.ChainTypeFormatter = ChainTypeFormatter;
//# sourceMappingURL=ChainTypeFormatter.js.map