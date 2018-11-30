import { app, BrowserWindow} from 'electron';
import * as Electron from 'electron';

import * as path from 'path';
import * as url from 'url';

app.on('ready', () => {
  console.log('app ready');

  const main = new Electron.BrowserWindow();
  main.loadURL(url.format({
    pathname: path.join(__dirname, './app/index.html'),
    protocol: 'file',
    slashes: true,
  }));
});