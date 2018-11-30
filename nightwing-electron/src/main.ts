import { app, BrowserWindow} from 'electron';
import * as Electron from 'electron';

import * as path from 'path';
import * as url from 'url';

const isDevelopment = process.env.NODE_ENV !== 'production'
const windowBundleRoot: url.UrlObject = isDevelopment 
  ? { pathname: '/', protocol: 'http', hostname: 'localhost', port: 9000 }
  : { pathname: path.join(__dirname, '../../app/'), protocol: 'file',  slashes: true };

app.on('ready', () => {
  console.log('app ready');
  openMainWindow();
});

function openMainWindow() {
  const windowURL = url.format({ 
    pathname: windowBundleRoot.pathname + 'index.html',
    ...windowBundleRoot
  });

  console.log(windowURL);

  const main = new Electron.BrowserWindow();
  main.webContents.openDevTools();
  main.loadURL(windowURL);

  return main;  
}