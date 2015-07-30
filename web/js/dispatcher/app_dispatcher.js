import Dispatcher from './dispatcher';

module.exports = _.assign({}, Dispatcher.prototype, {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  },

  handleKeyDown: function(action) {
    console.log('[app_dispatcher.js] triggered in app dispatcher');
    this.dispatch({
      source: 'HOME_BOARD_ACTION',
      action: action
    });
  }
});
