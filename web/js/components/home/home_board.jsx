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
    HomeBoardActions.handleKeyDown(e);
  }

  _clicked(e) {
    console.log('[home_board.jsx] clicked: ', e);
  }

  _renderSVG() {
    let { coordinates } = this.props;

    let svg = d3.select('#home-board')
      .append('svg')
      .attr('width', 500)
      .attr('height', 100);

    let circle = svg
      .datum(coordinates)
      .append('circle')
      .attr('cx', function(d) { return d.x; })
      .attr('cy', function(d) { return d.y; })
      .attr('r', '10px')
      .attr('fill', 'red');
  }

  _move(coordinates) {
    d3.select('#home-board').select('svg').select('circle')
      .datum(coordinates)
      // .transition()
      .attr('cx', function(d) { return d.x; })
      .attr('cy', function(d) { return d.y; });
  }

  componentDidUpdate(prevProps, prevState) {
    let movedX = (prevProps.coordinates.x !== this.props.coordinates.x);
    let movedY = (prevProps.coordinates.y !== this.props.coordinates.y);
    let moved = (movedX || movedY);

    if ( moved ) {
      this._move(this.props.coordinates);
    };
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
      <div id='home-board'></div>
    );
  }
}

HomeBoard.displayName = 'HomeBoard';

HomeBoard.propTypes = {
  coordinates: React.PropTypes.object
};

module.exports = HomeBoard;
