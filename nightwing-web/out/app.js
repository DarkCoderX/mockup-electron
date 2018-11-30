"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var contact_list_1 = require("nightwing-react/src/contact-list/contact-list");
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
ReactDOM.render(React.createElement(contact_list_1.ContactList, null), document.body);
