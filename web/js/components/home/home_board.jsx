/**
 * DECRIPTION
 *
 * @prop {object}  - PROP_DESCRIPTION
 */

class HomeBoard extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {  };
  }

  componentDidMount() {
    var draw = SVG('home-board').viewbox(0, 0, 400, 300);

  }

  render() {
    // console.log('[home_board.jsx] props: ', this.props);
    // console.log('[home_board.jsx] state: ', this.state);

    // let {  } = this.props;
    // let {  } = this.state;

    return (
      <div id='home-board'>Home Board</div>
    );
  }
}

HomeBoard.displayName = 'HomeBoard';

// HomeBoard.propTypes = {
//   : React.PropTypes.object
// };

module.exports = HomeBoard;
