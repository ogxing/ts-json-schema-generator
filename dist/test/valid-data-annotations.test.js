"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const annotationDefaultSamples = __importStar(require("./valid-data/annotation-default/samples"));
describe("valid-data-annotations", () => {
    it("annotation-custom", (0, utils_1.assertValidSchema)("annotation-custom", "MyObject", "basic", [
        "customBooleanProperty",
        "customNumberProperty",
        "customStringProperty",
        "customComplexProperty",
        "customMultilineProperty",
        "customUnquotedProperty",
    ]));
    it("annotation-empty-basic", (0, utils_1.assertValidSchema)("annotation-empty", "MyObject", "basic", ["customEmptyAnnotation"]));
    it("annotation-empty-extended", (0, utils_1.assertValidSchema)("annotation-empty", "MyObject", "extended", ["customEmptyAnnotation"]));
    it("annotation-deprecated-basic", (0, utils_1.assertValidSchema)("annotation-deprecated", "MyObject", "basic", ["deprecationMessage"]));
    it("annotation-deprecated-extended", (0, utils_1.assertValidSchema)("annotation-deprecated", "MyObject", "extended", ["deprecationMessage"]));
    it("annotation-description-override", (0, utils_1.assertValidSchema)("annotation-description-override", "MyObject", "extended", ["markdownDescription"]));
    it("annotation-comment", (0, utils_1.assertValidSchema)("annotation-comment", "MyObject", "extended"));
    it("annotation-default", function () {
        (0, utils_1.assertValidSchema)("annotation-default", "MyObject", "extended", [], undefined, {
            validSamples: annotationDefaultSamples.validSamples,
            invalidSamples: annotationDefaultSamples.invalidSamplesUnlessDefaults,
        })();
        const validWithDefaults = annotationDefaultSamples.invalidSamplesUnlessDefaults.map((sample) => ({
            ...sample,
        }));
        (0, utils_1.assertValidSchema)("annotation-default", "MyObject", "extended", [], undefined, {
            validSamples: validWithDefaults,
            ajvOptions: { useDefaults: true },
        })();
        validWithDefaults.forEach((sample) => {
            expect(sample).toEqual(annotationDefaultSamples.expectedAfterDefaults);
        });
    });
    it("annotation-example", (0, utils_1.assertValidSchema)("annotation-example", "MyObject", "extended"));
    it("annotation-id", (0, utils_1.assertValidSchema)("annotation-id", "MyObject", "extended", [], "Test"));
    it("annotation-readOnly", (0, utils_1.assertValidSchema)("annotation-readOnly", "MyObject", "basic"));
    it("annotation-ref", (0, utils_1.assertValidSchema)("annotation-ref", "MyObject", "extended"));
    it("annotation-writeOnly", (0, utils_1.assertValidSchema)("annotation-writeOnly", "MyObject", "basic"));
    it("annotation-union-if-then", (0, utils_1.assertValidSchema)("annotation-union-if-then", "Animal", "basic"));
});
//# sourceMappingURL=valid-data-annotations.test.js.map