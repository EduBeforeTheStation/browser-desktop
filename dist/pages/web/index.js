"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Header_1 = __importDefault(require("../../components/Header"));
require("./style.css");
var Web = function () {
    return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx(Header_1.default, {}, void 0), jsx_runtime_1.jsx("webview", { className: "webview", src: 'https://duckduckgo.com/' }, void 0)] }, void 0));
};
exports.default = Web;
