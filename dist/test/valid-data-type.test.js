"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
describe("valid-data-type", () => {
    it("type-aliases-primitive", (0, utils_1.assertValidSchema)("type-aliases-primitive", "MyString"));
    it("type-aliases-primitive-with-id", (0, utils_1.assertValidSchema)("type-aliases-primitive-with-id", "MyString", "none", undefined, "testId"));
    it("type-aliases-object", (0, utils_1.assertValidSchema)("type-aliases-object", "MyAlias"));
    it("type-aliases-mixed", (0, utils_1.assertValidSchema)("type-aliases-mixed", "MyObject"));
    it("type-aliases-union", (0, utils_1.assertValidSchema)("type-aliases-union", "MyUnion"));
    it("type-aliases-anonymous", (0, utils_1.assertValidSchema)("type-aliases-anonymous", "MyObject"));
    it("type-aliases-local-namespace", (0, utils_1.assertValidSchema)("type-aliases-local-namespace", "MyObject"));
    it("type-aliases-recursive-anonymous", (0, utils_1.assertValidSchema)("type-aliases-recursive-anonymous", "MyAlias"));
    it("type-aliases-recursive-export", (0, utils_1.assertValidSchema)("type-aliases-recursive-export", "MyObject"));
    it("type-aliases-recursive-generics-anonymous", (0, utils_1.assertValidSchema)("type-aliases-recursive-generics-anonymous", "MyAlias"));
    it("type-aliases-recursive-generics-export", (0, utils_1.assertValidSchema)("type-aliases-recursive-generics-export", "MyAlias"));
    it("type-aliases-tuple", (0, utils_1.assertValidSchema)("type-aliases-tuple", "MyTuple"));
    it("type-aliases-tuple-empty", (0, utils_1.assertValidSchema)("type-aliases-tuple-empty", "MyTuple"));
    it("type-aliases-tuple-optional-items", (0, utils_1.assertValidSchema)("type-aliases-tuple-optional-items", "MyTuple"));
    it("type-aliases-tuple-rest", (0, utils_1.assertValidSchema)("type-aliases-tuple-rest", "MyTuple"));
    it("type-aliases-tuple-only-rest", (0, utils_1.assertValidSchema)("type-aliases-tuple-only-rest", "MyTuple"));
    it("type-named-tuple-member", (0, utils_1.assertValidSchema)("type-named-tuple-member", "*"));
    it("type-maps", (0, utils_1.assertValidSchema)("type-maps", "MyObject"));
    it("type-primitives", (0, utils_1.assertValidSchema)("type-primitives", "MyObject"));
    it("type-date", (0, utils_1.assertValidSchema)("type-date", "MyObject"));
    it("type-date-annotation", (0, utils_1.assertValidSchema)("type-date-annotation", "MyObject", "basic"));
    it("type-regexp", (0, utils_1.assertValidSchema)("type-regexp", "MyObject"));
    it("type-union", (0, utils_1.assertValidSchema)("type-union", "TypeUnion"));
    it("type-union-tagged", (0, utils_1.assertValidSchema)("type-union-tagged", "Shape"));
    it("type-intersection", (0, utils_1.assertValidSchema)("type-intersection", "MyObject"));
    it("type-intersection-with-arrays", (0, utils_1.assertValidSchema)("type-intersection-with-arrays", "*"));
    it("type-intersection-conflict", (0, utils_1.assertValidSchema)("type-intersection-conflict", "MyObject"));
    it("type-intersection-partial-conflict", (0, utils_1.assertValidSchema)("type-intersection-partial-conflict", "MyType"));
    it("type-intersection-partial-conflict-ref", (0, utils_1.assertValidSchema)("type-intersection-partial-conflict", "MyType"));
    it("type-intersection-recursive-interface", (0, utils_1.assertValidSchema)("type-intersection-recursive-interface", "Intersection"));
    it("type-intersection-union-recursive-interface", (0, utils_1.assertValidSchema)("type-intersection-union-recursive-interface", "Intersection"));
    it("type-intersection-union", (0, utils_1.assertValidSchema)("type-intersection-union", "MyObject"));
    it("type-intersection-union-enum", (0, utils_1.assertValidSchema)("type-intersection-union-enum", "MyObject"));
    it("type-intersection-union-primitive", (0, utils_1.assertValidSchema)("type-intersection-union", "MyObject"));
    it("type-intersection-aliased-union", (0, utils_1.assertValidSchema)("type-intersection-aliased-union", "MyObject"));
    it("type-intersection-additional-props", (0, utils_1.assertValidSchema)("type-intersection-additional-props", "MyObject"));
    it("type-extend", (0, utils_1.assertValidSchema)("type-extend", "MyObject"));
    it("type-extend-circular", (0, utils_1.assertValidSchema)("type-extend-circular", "MyType"));
    it("type-extends-never", (0, utils_1.assertValidSchema)("type-extends-never", "MyType"));
    it("type-typeof", (0, utils_1.assertValidSchema)("type-typeof", "MyType"));
    it("type-typeof-value", (0, utils_1.assertValidSchema)("type-typeof-value", "MyType"));
    it("type-typeof-object-property", (0, utils_1.assertValidSchema)("type-typeof-object-property", "MyType"));
    it("type-typeof-class-static-property", (0, utils_1.assertValidSchema)("type-typeof-class-static-property", "MyType"));
    it("type-typeof-enum", (0, utils_1.assertValidSchema)("type-typeof-enum", "MyObject"));
    it("type-typeof-class", (0, utils_1.assertValidSchema)("type-typeof-class", "MyObject"));
    it("type-typeof-function", (0, utils_1.assertValidSchema)("type-typeof-function", "*"));
    it("type-keys", (0, utils_1.assertValidSchema)("type-typeof-keys", "MyType"));
    it("type-indexed-access-tuple-1", (0, utils_1.assertValidSchema)("type-indexed-access-tuple-1", "MyType"));
    it("type-indexed-access-tuple-2", (0, utils_1.assertValidSchema)("type-indexed-access-tuple-2", "MyType"));
    it("type-indexed-access-tuple-union", (0, utils_1.assertValidSchema)("type-indexed-access-tuple-union", "FormLayout"));
    it("type-indexed-access-type-union", (0, utils_1.assertValidSchema)("type-indexed-access-type-union", "MyType"));
    it("type-indexed-access-object-1", (0, utils_1.assertValidSchema)("type-indexed-access-object-1", "MyType"));
    it("type-indexed-access-object-2", (0, utils_1.assertValidSchema)("type-indexed-access-object-2", "MyType"));
    it("type-indexed-access-keyof", (0, utils_1.assertValidSchema)("type-indexed-access-keyof", "MyType"));
    it("type-indexed-circular-access", (0, utils_1.assertValidSchema)("type-indexed-circular-access", "*"));
    it("type-keyof-tuple", (0, utils_1.assertValidSchema)("type-keyof-tuple", "MyType"));
    it("type-keyof-object", (0, utils_1.assertValidSchema)("type-keyof-object", "MyType"));
    it("type-keyof-object-function", (0, utils_1.assertValidSchema)("type-keyof-object-function", "MyType"));
    it("type-mapped-simple", (0, utils_1.assertValidSchema)("type-mapped-simple", "MyObject"));
    it("type-mapped-index", (0, utils_1.assertValidSchema)("type-mapped-index", "MyObject"));
    it("type-mapped-index-as", (0, utils_1.assertValidSchema)("type-mapped-index-as", "MyObject"));
    it("type-mapped-index-as-template", (0, utils_1.assertValidSchema)("type-mapped-index-as-template", "MyObject"));
    it("type-mapped-literal", (0, utils_1.assertValidSchema)("type-mapped-literal", "MyObject"));
    it("type-mapped-generic", (0, utils_1.assertValidSchema)("type-mapped-generic", "MyObject"));
    it("type-mapped-native", (0, utils_1.assertValidSchema)("type-mapped-native", "MyObject"));
    it("type-mapped-native-single-literal", (0, utils_1.assertValidSchema)("type-mapped-native-single-literal", "MyObject"));
    it("type-mapped-widened", (0, utils_1.assertValidSchema)("type-mapped-widened", "MyObject"));
    it("type-mapped-optional", (0, utils_1.assertValidSchema)("type-mapped-optional", "MyObject"));
    it("type-mapped-additional-props", (0, utils_1.assertValidSchema)("type-mapped-additional-props", "MyObject"));
    it("type-mapped-array", (0, utils_1.assertValidSchema)("type-mapped-array", "MyObject"));
    it("type-mapped-union-intersection", (0, utils_1.assertValidSchema)("type-mapped-union-intersection", "MyObject"));
    it("type-mapped-enum", (0, utils_1.assertValidSchema)("type-mapped-enum", "MyObject"));
    it("type-mapped-enum-optional", (0, utils_1.assertValidSchema)("type-mapped-enum-optional", "MyObject"));
    it("type-mapped-enum-null", (0, utils_1.assertValidSchema)("type-mapped-enum-null", "MyObject"));
    it("type-mapped-enum-number", (0, utils_1.assertValidSchema)("type-mapped-enum-number", "MyObject"));
    it("type-mapped-exclude", (0, utils_1.assertValidSchema)("type-mapped-exclude", "MyObject", "extended"));
    it("type-mapped-double-exclude", (0, utils_1.assertValidSchema)("type-mapped-double-exclude", "MyObject", "extended"));
    it("type-mapped-symbol", (0, utils_1.assertValidSchema)("type-mapped-symbol", "MyObject"));
    it("type-mapped-never", (0, utils_1.assertValidSchema)("type-mapped-never", "MyObject"));
    it("type-mapped-empty-exclude", (0, utils_1.assertValidSchema)("type-mapped-empty-exclude", "MyObject"));
    it("type-mapped-annotated-string", (0, utils_1.assertValidSchema)("type-mapped-annotated-string", "ExchangeRate", "extended"));
    it("type-conditional-simple", (0, utils_1.assertValidSchema)("type-conditional-simple", "MyObject"));
    it("type-conditional-inheritance", (0, utils_1.assertValidSchema)("type-conditional-inheritance", "MyObject"));
    it("type-conditional-union", (0, utils_1.assertValidSchema)("type-conditional-union", "MyObject"));
    it("type-conditional-enum", (0, utils_1.assertValidSchema)("type-conditional-enum", "IParameter"));
    it("type-conditional-intersection", (0, utils_1.assertValidSchema)("type-conditional-intersection", "MyObject"));
    it("type-conditional-exclude", (0, utils_1.assertValidSchema)("type-conditional-exclude", "MyObject"));
    it("type-conditional-exclude-complex", (0, utils_1.assertValidSchema)("type-conditional-exclude-complex", "BaseAxisNoSignals"));
    it("type-conditional-exclude-narrowing", (0, utils_1.assertValidSchema)("type-conditional-exclude-narrowing", "MyObject"));
    it("type-conditional-narrowing", (0, utils_1.assertValidSchema)("type-conditional-narrowing", "MyObject"));
    it("type-conditional-omit", (0, utils_1.assertValidSchema)("type-conditional-omit", "MyObject"));
    it("type-conditional-jsdoc", (0, utils_1.assertValidSchema)("type-conditional-jsdoc", "MyObject", "extended"));
    it("type-conditional-infer", (0, utils_1.assertValidSchema)("type-conditional-infer", "MyType"));
    it("type-conditional-infer-nested", (0, utils_1.assertValidSchema)("type-conditional-infer-nested", "MyType"));
    it("type-conditional-infer-recursive", (0, utils_1.assertValidSchema)("type-conditional-infer-recursive", "MyType"));
    it("type-conditional-infer-rest", (0, utils_1.assertValidSchema)("type-conditional-infer-rest", "MyType"));
    it("type-conditional-infer-tail-recursion", (0, utils_1.assertValidSchema)("type-conditional-infer-tail-recursion", "MyType"));
    it("type-conditional-infer-tuple-xor", (0, utils_1.assertValidSchema)("type-conditional-infer-tuple-xor", "MyType"));
    it("type-tuple-nested-rest", (0, utils_1.assertValidSchema)("type-tuple-nested-rest", "MyType"));
    it("type-tuple-nested-rest-to-union", (0, utils_1.assertValidSchema)("type-tuple-nested-rest-to-union", "MyType"));
    it("type-tuple-nested-rest-uniform", (0, utils_1.assertValidSchema)("type-tuple-nested-rest-uniform", "MyType"));
    it("type-recursive-deep-exclude", (0, utils_1.assertValidSchema)("type-recursive-deep-exclude", "MyType"));
    it("ignore-export", (0, utils_1.assertValidSchema)("ignore-export", "*"));
});
//# sourceMappingURL=valid-data-type.test.js.map