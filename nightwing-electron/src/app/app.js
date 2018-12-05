"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var main_view_1 = require("./main-view");
var target = document.createElement('div');
document.body.append(target);
console.log('render main view');
ReactDOM.render(React.createElement(main_view_1.MainView, null), target);
//# sourceMappingURL=app.js.map