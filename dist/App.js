"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var home_1 = __importDefault(require("./pages/home"));
var setting_1 = __importDefault(require("./pages/setting"));
var web_1 = __importDefault(require("./pages/web"));
var App = function () {
    return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: '/', component: home_1.default }, void 0), jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: '/setting', component: setting_1.default }, void 0), jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: '/web', component: web_1.default }, void 0)] }, void 0));
};
exports.default = App;
