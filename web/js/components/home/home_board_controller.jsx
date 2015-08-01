/**
 * DECRIPTION
 *
 * @prop {object}  - PROP_DESCRIPTION
 */

import HomeBoardStore from 'home_board_store';
import HomeBoard from './home_board';

class HomeBoardController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: HomeBoardStore.getCoordinates()
    }
    // this.state = {  };
  }

  _onChange() {
    this.setState({
      coordinates: HomeBoardStore.getCoordinates()
    });
  }

  componentDidMount() {
    HomeBoardStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    HomeBoardStore.removeChangeListener(this._onChange.bind(this));
  }

  render() {
  // console.log('[home_board_controller.jsx] state: ', this.state);

    return (
      <HomeBoard {...this.state}/>
    );
  }
}

HomeBoardController.displayName = 'HomeBoardController';

// HomeBoardController.propTypes = {
//   : React.PropTypes.object
// };

module.exports = HomeBoardController;
