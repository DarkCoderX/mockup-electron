# mockup-electron

This Mono Repository contains an example structure for an Electron 
and a Web project, with shared background an ui code. Both projects
should compile without the need to initialize the other one.

The web site is divided in to parts without dependencies 
`nightwing-web` and `nightwing-express`. The Electron app
`nightwing-electron` contains the render and the main code.

To initialize all project at once just execute `npm install`. This
will install all packages of the root module and the there children. 

## Electron 

To build the terminal installer goto the `nightwing-electron` and 
call `npm run dist` the result will be found in `nightwing-electron/installer`. 

To start development execute `npm run start` or `npm start`. This will 
start a `webpack-dev-server` and the electron app. The ts code will 
just be compiled once, changes afterwards has to be compiled manual,
with `npm run tsc` or `npm run build`. 

The ts files can also be watched by using `npm run tsc:watch`, this will also watch the changes in 
`electron-core` and `electron-react`. 


The web
