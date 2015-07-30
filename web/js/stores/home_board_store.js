import AppDispatcher from 'AppDispatcher';
import { EventEmitter } from 'events';
import Contstants from 'Contstants';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';


var coordinates = {
  x: 0,
  y: 0
}

var HomeBoardStore = assign({}, EventEmitter.prototype, {

  getCoordinates: function() {
    return coordinates;
  }

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

dispatcherIndex: AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case HomeBoardConstants.HOME_BOARD_KEY_DOWN:
      console.log('[home_board_store.js] triggered Home Board Key Down');
      break;

  }

  return true;

});

module.exports = HomeBoardStore;
