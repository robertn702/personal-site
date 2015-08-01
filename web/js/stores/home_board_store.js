import AppDispatcher from '../dispatcher/app_dispatcher';
import { EventEmitter } from 'events';
import HomeBoardConstants from 'home_board_constants';
let { update } = React.addons;

var CHANGE_EVENT = 'change';

// initialize coordinates as (0, 0)
var _coordinates = {
  x: 0,
  y: 0
};

// how far the item will move
const MOVE_DISTANCE = 20;

var keyEvents = new Bacon.Bus();

let move = {
  left: keyEvents.filter(function(keyCode) { return keyCode === 37; }).map(-MOVE_DISTANCE),
  right: keyEvents.filter(function(keyCode) { return keyCode === 39; }).map(MOVE_DISTANCE),
  up: keyEvents.filter(function(keyCode) { return keyCode === 38; }).map(-MOVE_DISTANCE),
  down: keyEvents.filter(function(keyCode) { return keyCode === 40; }).map(MOVE_DISTANCE)
};

let moveHorizontally = move.left.merge(move.right);
let moveVertically = move.up.merge(move.down);


let updateCoordinates = function(coordinate) {
  return function(oldCoordinates, MOVE_DISTANCE) {
    let newCoordinates = _.clone(oldCoordinates);
    newCoordinates[coordinate] += MOVE_DISTANCE;
    return newCoordinates;
  }
}

let coordinates = Bacon.update(_coordinates,
  moveHorizontally, updateCoordinates('x'),
  moveVertically, updateCoordinates('y')
)

coordinates.onValue(function(coordinates) {
  _coordinates = update(_coordinates, { $set: coordinates });
})

var HomeBoardStore = _.assign({}, EventEmitter.prototype, {
  getCoordinates: function() {
    return _coordinates;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case HomeBoardConstants.HOME_BOARD_KEY_DOWN:
      keyEvents.push(action.event.which);
      HomeBoardStore.emitChange();
      break;
  }

  return true;
});

module.exports = HomeBoardStore;
