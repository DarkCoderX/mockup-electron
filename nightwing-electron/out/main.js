"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var Electron = require("electron");
var path = require("path");
var url = require("url");
electron_1.app.on('ready', function () {
    console.log('app ready');
    var main = new Electron.BrowserWindow();
    main.loadURL(url.format({
        pathname: path.join(__dirname, './app/index.html'),
        protocol: 'file',
        slashes: true,
    }));
});
//# sourceMappingURL=main.js.map