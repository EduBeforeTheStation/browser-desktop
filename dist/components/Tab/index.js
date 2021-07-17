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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./style.css");
var Tab = function (_a) {
    var favicon = _a.favicon, title = _a.title, isClicked = _a.isClicked;
    return (jsx_runtime_1.jsxs("div", __assign({ className: "tab_item " + (isClicked ? 'clicked' : '') }, { children: [jsx_runtime_1.jsx("img", { className: "favicon", src: favicon, alt: 'favicon' }, void 0),
            jsx_runtime_1.jsxs("p", __assign({ className: 'site_title' }, { children: ["\u00A0", title] }), void 0)] }), void 0));
};
exports.default = Tab;
