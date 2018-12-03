
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MainView } from './main-view';

const target = document.createElement('div');
document.body.append(target);

console.log('render main view')

ReactDOM.render(<MainView></MainView>, target);
