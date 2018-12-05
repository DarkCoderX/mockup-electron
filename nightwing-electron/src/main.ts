import { app, BrowserWindow} from 'electron';
import * as Electron from 'electron';

import * as path from 'path';
import * as url from 'url';

const isDevelopment = process.env.NODE_ENV !== 'production'
const rendererRoot:string = isDevelopment 
  ? url.format({ pathname: '/', protocol: 'http', hostname: 'localhost', port: 9000 })
  : url.format({ pathname: path.join(__dirname, 'app/'), protocol: 'file',  slashes: true });

console.log(rendererRoot, __dirname)

app.on('ready', () => {
  console.log('app ready');
  openMainWindow();
  openNotificationWindow();
});

function openMainWindow() {
  const windowURL = rendererRoot + 'app.html';

  console.log(windowURL);

  const main = new Electron.BrowserWindow();
  main.webContents.openDevTools();
  main.loadURL(windowURL);

  return main;  
}

function openNotificationWindow() {
  const windowURL = rendererRoot + 'notification.html';

  console.log(windowURL);

  const main = new Electron.BrowserWindow();
  main.webContents.openDevTools();
  main.loadURL(windowURL);

  return main;  
}