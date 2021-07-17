"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Header_1 = __importDefault(require("../Header"));
var Layout = function (_a) {
    var children = _a.children;
    return (jsx_runtime_1.jsxs("main", { children: [jsx_runtime_1.jsx(Header_1.default, {}, void 0), children] }, void 0));
};
exports.default = Layout;
