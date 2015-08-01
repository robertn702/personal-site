import { RouteHandler } from 'react-router';
import HomeBoardController from '../home/home_board_controller';
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
        <HomeBoardController/>
      </div>
    );
  }
}

MainPage.displayName = 'MainPage';

module.exports = MainPage;
