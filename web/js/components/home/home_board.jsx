/**
 * DECRIPTION
 *
 * @prop {object}  - PROP_DESCRIPTION
 */

import HomeBoardActions from 'home_board_actions';

const CANVAS = {
  width: 500,
  height: 50
};

class HomeBoard extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {  };
  }


  _handleKeyDown(e) {
    console.log('[home_board.jsx] you pressed a key: ', e);
    HomeBoardActions.handleKeyDown(e);
  }

  _clicked(e) {
    console.log('[home_board.jsx] clicked: ', e);
  }

  _renderSVG() {
    let svg = d3
      .select('#home-board')
      .append('svg')
      .attr('width', CANVAS.width)
      .attr('height', CANVAS.height);

    svg
      .append('circle')
      .attr('cx', CANVAS.width/2)
      .attr('cy', CANVAS.height/2)
      .attr('r', '10px')
      .attr('fill', 'red');
  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentDidMount() {
    // var draw = SVG('home-board').viewbox(0, 0, 400, 300);
    $(document.body).on('keydown', this._handleKeyDown.bind(this));

    this._renderSVG();
  }

  componentWillUnmount() {
    $(document.body).off('keydown', this._handleKeyDown.bind(this));
  }

  render() {
    // console.log('[home_board.jsx] props: ', this.props);
    // console.log('[home_board.jsx] state: ', this.state);

    // let {  } = this.props;
    // let {  } = this.state;

    return (
      <div id='home-board' onKeyDown={this._handleKeyDown.bind(this)} onClick={this._clicked.bind(this)}>
        Home Board
      </div>
    );
  }
}

HomeBoard.displayName = 'HomeBoard';

// HomeBoard.propTypes = {
//   : React.PropTypes.object
// };

module.exports = HomeBoard;
