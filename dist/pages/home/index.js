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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var Header_1 = __importDefault(require("../../components/Header"));
var Home = function () {
    return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx(Header_1.default, {}, void 0),
            jsx_runtime_1.jsx("h1", { children: "home" }, void 0),
            jsx_runtime_1.jsx(react_router_dom_1.Link, __assign({ to: '/web' }, { children: "\uB355\uB355\uACE0" }), void 0)] }, void 0));
};
exports.default = Home;
