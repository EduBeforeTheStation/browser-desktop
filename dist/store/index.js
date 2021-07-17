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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.Context = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
exports.Context = react_1.default.createContext({});
exports.init = { image1: { useable: false }, image2: { useable: false }, };
var Container = function (props) {
    var defaultTab = {
        url: '/',
        history: ['/'],
    };
    var _a = react_1.useState([defaultTab]), tabs = _a[0], setTabs = _a[1];
    var addTab = react_1.useCallback(function () {
        setTabs(__spreadArray(__spreadArray([], tabs), [defaultTab]));
    }, [tabs]);
    var removeTab = react_1.useCallback(function (idx) {
        var new_tabs = tabs;
        setTabs(new_tabs.splice(idx));
    }, [tabs]);
    return (jsx_runtime_1.jsx(exports.Context.Provider, __assign({ value: { tabs: tabs, addTab: addTab, removeTab: removeTab } }, { children: props.children }), void 0));
};
exports.default = Container;
