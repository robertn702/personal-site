/**
 * DECRIPTION
 *
 */

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>App Component</div>
    );
  }
}

React.render(<App/>, document.getElementById('content'));
