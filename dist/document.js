"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var App_1 = __importDefault(require("./App"));
var react_router_dom_1 = require("react-router-dom");
var Document = function () {
    return (jsx_runtime_1.jsx(react_router_dom_1.BrowserRouter, { children: jsx_runtime_1.jsx(App_1.default, {}, void 0) }, void 0));
};
exports.default = Document;
