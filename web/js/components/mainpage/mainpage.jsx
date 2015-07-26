import { RouteHandler } from 'react-router';
import Board from '../home/home_board';

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

  componentDidMount() {

  }

  render() {
    return (
      <div id="">
        <h1>App</h1>
        <Board/>
      </div>
    );
  }
}

MainPage.displayName = 'MainPage';

module.exports = MainPage;
