
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const target = document.createElement('div');
document.body.append(target);

console.log('render main view')

ReactDOM.render(<h1>Notification</h1>, target);
