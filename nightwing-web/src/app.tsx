
import { ContactList } from 'nightwing-react/src/contact-list/contact-list';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MainView } from './main-view';

const target = document.createElement('div');
document.body.append(target);

ReactDOM.render(<MainView></MainView>, target);
