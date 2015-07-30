/**
 * DECRIPTION
 *
 * @prop {object}  - PROP_DESCRIPTION
 */

import STORE from 'STORE';
import HomeBoard from './home_board';

class HomeBoardController extends React.Component {
  constructor(props) {
    super(props);
    this.state = STORE.GET_STATE
    // this.state = {  };
  }

  componentDidMount() {
    STORE.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    STORE.removeChangeListener(this._onChange);
  }

  render() {
    // console.log('[home_board_controller.jsx] props: ', this.props);
    // console.log('[home_board_controller.jsx] state: ', this.state);

    // let {  } = this.props;
    // let {  } = this.state;

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
