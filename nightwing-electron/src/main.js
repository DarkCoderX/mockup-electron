"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var Electron = require("electron");
var path = require("path");
var url = require("url");
var isDevelopment = process.env.NODE_ENV !== 'production';
var rendererRoot = isDevelopment
    ? url.format({ pathname: '/', protocol: 'http', hostname: 'localhost', port: 9000 })
    : url.format({ pathname: path.join(__dirname, 'app/'), protocol: 'file', slashes: true });
console.log(rendererRoot, __dirname);
electron_1.app.on('ready', function () {
    console.log('app ready');
    openMainWindow();
    openNotificationWindow();
});
function openMainWindow() {
    var windowURL = rendererRoot + 'app.html';
    console.log(windowURL);
    var main = new Electron.BrowserWindow();
    main.webContents.openDevTools();
    main.loadURL(windowURL);
    return main;
}
function openNotificationWindow() {
    var windowURL = rendererRoot + 'notification.html';
    console.log(windowURL);
    var main = new Electron.BrowserWindow();
    main.webContents.openDevTools();
    main.loadURL(windowURL);
    return main;
}
//# sourceMappingURL=main.js.map