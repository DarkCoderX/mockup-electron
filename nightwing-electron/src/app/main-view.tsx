import { ContactList } from 'nightwing-react';

import * as React from 'react';

export class MainView extends React.Component {
  render() {
    return <div className="nightwing-app">
      <h1>Nightwing Electron20</h1>
      <ContactList></ContactList>
    </div>;
  }
}