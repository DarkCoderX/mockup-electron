import { ContactList } from 'nightwing-react/src';

import * as React from 'react';

export class MainView extends React.Component {
  render() {
    return <div className="nightwing-app">
      <h1>Nightwing Electron289</h1>
      <ContactList></ContactList>
    </div>;
  }
}