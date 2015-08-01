import Dispatcher from './dispatcher';

var AppDispatcher = _.assign({}, Dispatcher.prototype, {
  handleKeyDown: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }

});

module.exports = AppDispatcher;
