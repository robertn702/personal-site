import { RouteHandler } from 'react-router';

/**
 * DECRIPTION
 *
 * @prop {object}  - PROP_DESCRIPTION
 */

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {  };
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <RouteHandler/>
      </div>
    );
  }
}

MainPage.displayName = 'MainPage';

module.exports = MainPage;
