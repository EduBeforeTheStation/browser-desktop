"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var store_1 = require("../../store");
require("./style.css");
var Tab = function (_a) {
    var idx = _a.idx, favicon = _a.favicon, title = _a.title, isClicked = _a.isClicked;
    var removeTabs = react_1.useContext(store_1.Context).removeTabs;
    return (jsx_runtime_1.jsxs("div", __assign({ className: "tab_item " + (isClicked ? 'clicked' : '') }, { children: [jsx_runtime_1.jsx("img", { className: "favicon", src: favicon, alt: 'favicon' }, void 0),
            jsx_runtime_1.jsxs("p", __assign({ className: 'site_title' }, { children: ["\u00A0", title] }), void 0),
            isClicked !== null && isClicked !== void 0 ? isClicked : jsx_runtime_1.jsx("p", __assign({ onClick: function () { return removeTabs(idx); } }, { children: "X" }), void 0)] }), void 0));
};
exports.default = react_1.default.memo(Tab);
