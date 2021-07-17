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
var react_1 = require("react");
var Tab_1 = __importDefault(require("../Tab"));
require("./style.css");
var Header = function () {
    var url = 'https://duckduckgo.com';
    var tablineRef = react_1.useRef(null);
    var tabMenuButtonClickHandler = function () {
        alert('quit');
        //ipcRenderer.send('quit');
    };
    return (jsx_runtime_1.jsxs("header", __assign({ className: "header" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "tab_line", ref: tablineRef }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "tabs_wrapper" }, { children: [jsx_runtime_1.jsx(Tab_1.default, { favicon: "https://s2.googleusercontent.com/s2/favicons?domain=" + url, title: '김병주', isClicked: true }, void 0), jsx_runtime_1.jsx(Tab_1.default, { favicon: "https://s2.googleusercontent.com/s2/favicons?domain=" + url, title: '강태영', isClicked: false }, void 0)] }), void 0), jsx_runtime_1.jsxs("div", __assign({ className: "tab_menu_buttons_wrapper" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "tab_menu_button", onClick: tabMenuButtonClickHandler }, { children: jsx_runtime_1.jsx("img", { src: './images/minimize.svg', alt: 'icon-x' }, void 0) }), void 0), jsx_runtime_1.jsx("div", __assign({ className: "tab_menu_button", onClick: function () {
                                    (tablineRef === null || tablineRef === void 0 ? void 0 : tablineRef.current).click();
                                    (tablineRef === null || tablineRef === void 0 ? void 0 : tablineRef.current).click();
                                } }, { children: jsx_runtime_1.jsx("img", { src: './images/full.svg', alt: 'icon-x' }, void 0) }), void 0), jsx_runtime_1.jsx("div", __assign({ className: "tab_menu_button quit_btn", onClick: tabMenuButtonClickHandler }, { children: jsx_runtime_1.jsx("img", { src: './images/quit.svg', alt: 'icon-x' }, void 0) }), void 0)] }), void 0)] }), void 0), jsx_runtime_1.jsxs("div", __assign({ className: "control_bar_wrapper" }, { children: [jsx_runtime_1.jsx("button", __assign({ className: "control_button" }, { children: jsx_runtime_1.jsx("img", { src: "./images/go-back.svg", alt: 'icon-go-back' }, void 0) }), void 0), jsx_runtime_1.jsx("button", __assign({ className: "control_button" }, { children: jsx_runtime_1.jsx("img", { src: "./images/go-front.svg", alt: 'icon-go-forward' }, void 0) }), void 0), jsx_runtime_1.jsx("button", __assign({ className: "control_button" }, { children: jsx_runtime_1.jsx("img", { src: "./images/reload.svg", alt: 'icon-reload' }, void 0) }), void 0), jsx_runtime_1.jsx("input", { type: 'text', className: "search_box" }, void 0), jsx_runtime_1.jsx("button", __assign({ className: "control_button" }, { children: jsx_runtime_1.jsx("img", { src: "./images/star.svg", alt: 'icon-bookmark' }, void 0) }), void 0), jsx_runtime_1.jsx("button", __assign({ className: "control_button" }, { children: jsx_runtime_1.jsx("img", { src: "", alt: 'icon-menu' }, void 0) }), void 0)] }), void 0), jsx_runtime_1.jsx("div", { className: "bottom_bar" }, void 0)] }), void 0));
};
exports.default = Header;
